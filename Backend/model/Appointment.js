const mongoose = require('mongoose');
const appointmentschema = new mongoose.Schema({
    userID:String,
    doctorID:String,
    date:String,
    time:String,
    status:{type:String,default:"BOOKED"}

})
module.exports = mongoose.model('Appointment',appointmentschema)