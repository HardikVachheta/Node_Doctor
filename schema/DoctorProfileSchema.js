const mongoose = require("mongoose");
const Schema = mongoose.Schema

const DoctorProfileSchema = new Schema({
    qualification: {
        type: String
    },
    specialization: {
        type: String
    },
    experience: {
        type: String
    },
    profile_pic: {
        type: String
    },
    about: {
        type: String
    },
    registrationno: {
        type: String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('doctor_profile', DoctorProfileSchema)
