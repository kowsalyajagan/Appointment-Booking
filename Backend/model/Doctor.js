const mongoose = require('mongoose')
const doctorschema = new mongoose.Schema({
    Doctorname:String,
    Specialisation:String,
    AvailableSeats:String
})
module.exports = mongoose.model('Doctor',doctorschema)