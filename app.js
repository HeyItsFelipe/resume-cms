require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const User = require('./models/User');

const sampleResumeData = require('./sampleResumeData');
const PORT = process.env.PORT || 3000;


// MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected!  🎉'))
    .catch(err => console.log(err));


// Routes
app.get('/', (req, res) => {
    res.render('pages/login');
});

app.get('/signup', (req, res) => {
    res.render('pages/signup');
});

app.get('/dashboard', (req, res) => {
    res.render('pages/dashboard');
});

app.post('/signup', (req, res) => {
    console.log(">>>Sign Up Data", req.body);
    res.redirect('/dashboard');
});

app.post('/login', (req, res) => {
    console.log(">>>Log In Data", req.body);
    res.send('Successfully Logged In!');
});

app.get('/resumes', (req, res) => {
    res.send(sampleResumeData);
});


app.listen(PORT, console.log(`Server started on PORT ${PORT}!  🎉`));