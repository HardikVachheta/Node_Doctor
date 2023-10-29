const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ClinicSchema = new Schema({
    clinicname: {
        type: String
    },
    timing: {
        type: String
    },
    address: {
        type: String
    },
    phoneno: {
        type: Number
    },
    rating: {
        type: Number
    },
    about: {
        type: String
    },
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'city'
    },
    stateId: {
        type: String
    },
    pincode: {
        type: Number
    },
    doctorId:{ 
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('clinic', ClinicSchema)
