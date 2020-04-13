require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const { ensureAuthenticated } = require('./config/auth');

const app = express();
require('./config/passport')(passport);

app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.set('view engine', 'ejs');


const User = require('./models/User');

const sampleResumeData = require('./sampleResumeData');
const PORT = process.env.PORT || 3000;


// MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected!  🎉'))
    .catch(err => console.log(err));


/** Routes **/

// Login Page
app.get('/', (req, res) => {
    res.render('pages/login');
});

// Signup Page
app.get('/signup', (req, res) => {
    res.render('pages/signup', { userNameTaken: false });
});

// Dashboard Page
app.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('pages/dashboard', {
        name: req.user.name
    });
});

// Signup
app.post('/signup', (req, res) => {
    User.findOne({
        name: req.body.username
    }).then((user) => {
        if (user) {
            res.render('pages/signup', { userNameTaken: true });
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, function (err, hash) {
                    if (err) {
                        throw err;
                    }
                    console.log(">>>Hash", hash);
                    const newUser = User({
                        name: req.body.username,
                        password: hash
                    });
                    newUser.save().then((user) => {
                        req.flash('success_msg', 'You can now log in.')
                        res.redirect('/');
                    }).catch((err) => console.log(err));
                });
            });
        }
    });
});

// Login
app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next);
});

// Logout
app.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out.');
    res.redirect('/');
});

// Get Resumes
app.get('/resumes', (req, res) => {
    res.send(sampleResumeData);
});


app.listen(PORT, console.log(`Server started on PORT ${PORT}!  🎉`));