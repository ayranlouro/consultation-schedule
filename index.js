const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/clinica', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', (req, res) => {
    res.send('<h1>Testando!!!</h1>');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(80, () => {
    console.log('Server running on port 80...')
});