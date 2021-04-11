const moongose = require('moongose');

const appointment = new mongose.Schema({
    name: String,
    email: String,
    cpf: String,
    description: String,
    date: Date,
    time: String
});

module.exports = appointment;