const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileUploadSchema = new Schema({

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


    userId:[
        {
            type: Schema.Types.ObjectId,
        ref: 'user'
    }
    ],docid:[
        {
            type:Schema.Types.ObjectId,
            ref:'doctor'

        }
    ],clinicid:[
        {
            type:Schema.Types.ObjectId,
            ref:'clinic'

        }
    ],
})

module.exports = mongoose.model('FileUpload', FileUploadSchema);