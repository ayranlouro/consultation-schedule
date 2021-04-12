const appointment = require('../models/appointment');
const mongoose = require('mongoose');

const AppoModel = mongoose.model("Appointment", appointment);

class AppointmentService {

    async Create(name, email, cpf, description, date, time) {
        const newAppo = new AppoModel({
            name,
            email,
            cpf,
            description,
            date,
            time,
            fineshed: false
        });

        try {
            await newAppo.save();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }

        await newAppo.save();
    }

}

module.exports = new AppointmentService();

