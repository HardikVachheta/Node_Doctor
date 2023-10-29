const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({

    patientId:
        {
            type:Schema.Types.ObjectId,
            ref:'user'
        }
    ,
    doctorId:
        {
            type:Schema.Types.ObjectId,
            ref:'user'
        }
    ,
    clinicId:
        {
            type:Schema.Types.ObjectId,
            ref:'clinic'
        }
    ,
    appointmentDate:{
        type:Date
    },
    appointmentTime:{
        type:String
    }
})

module.exports = mongoose.model('appointment',AppointmentSchema)
