require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
app.use(helmet());
app.set('view engine', 'ejs');

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

app.get('/resumes', (req, res) => {
    res.send(sampleResumeData);
});


app.listen(PORT, console.log(`Server started on PORT ${PORT}!  🎉`));