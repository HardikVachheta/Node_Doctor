const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    pathologyname:{
        type:String
    },
    opentiming:{
        type:TimeRanges
    },
    closetiming:{
        type:TimeRanges
    },
    address:{
        type:String
    },
    phoneno:{
        type:Number
    },
    rating:{
        type:Number
    },
    comment:{
        type:String
    },
    lat:{
        type:Number
    },
    log:{
        type:Number
    },
    cityId:[
        {
            type:Schema.Types.ObjectId,
            ref:'city'
        }
    ],
    stateId:[
        {
            type:Schema.Types.ObjectId,
            ref:'state'
        }
    ],
    pincode:{
        type:Number
    },
    specialization:{
        type:String
    }
})

module.exports = mongoose.model('pathology',citySchema)
