const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

const appointmentService = require('./services/AppointmentService');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/clinica', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('<h1>Testando!!!</h1>');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/add', async (req, res) => {
    const status = await appointmentService.Create(
        req.body.pacientname,
        req.body.pacientemail,
        req.body.pacientcpf,
        req.body.description,
        req.body.date,
        req.body.time,
    );

    if (status) {
        res.redirect('/');
    } else {
        res.send('An error occured. Please, try again!');
    }
});

app.listen(80, () => {
    console.log('Server running on port 80...')
});