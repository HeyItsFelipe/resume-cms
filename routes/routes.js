const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');
const { ensureAuthenticated } = require('../config/auth');

const sampleResumeData = require('../sampleResumeData.json');

// Login Page
router.get('/', (req, res) => {
    res.render('pages/login');
});

// Signup Page
router.get('/signup', (req, res) => {
    res.render('pages/signup', { userNameTaken: false });
});

// Dashboard Page
router.get('/contact', ensureAuthenticated, (req, res) => {
    res.render('pages/contact', {
        name: req.user.name,
        page: "Contact"
    });
});

router.get('/experience', ensureAuthenticated, (req, res) => {
    res.render('pages/experience', {
        name: req.user.name,
        page: "Experience"
    });
});

router.get('/education', ensureAuthenticated, (req, res) => {
    res.render('pages/education', {
        name: req.user.name,
        page: "Education"
    });
});

router.get('/organizations', ensureAuthenticated, (req, res) => {
    res.render('pages/organizations', {
        name: req.user.name,
        page: "Organizations"
    });
});

// Signup
router.post('/signup', (req, res) => {
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
                    const newUser = User({
                        name: req.body.username,
                        password: hash
                    });
                    newUser.save().then((user) => {
                        req.flash('success_msg', 'Success! You can now log in.')
                        res.redirect('/');
                    }).catch((err) => console.log(err));
                });
            });
        }
    });
});

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/contact',
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You have logged out.');
    res.redirect('/');
});

// Get Resumes
router.get('/resumes', (req, res) => {
    res.send(sampleResumeData);
});

module.exports = router;