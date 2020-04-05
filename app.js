const express = require('express');
const helmet = require('helmet');
const sampleResumeData = require('./sampleResumeData');

const app = express();
app.use(helmet());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(sampleResumeData);
})

app.listen(PORT, console.log(`Server started on PORT ${PORT}!  🎉`));