const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userId:[
        {
            type:Schema.Types.ObjectId,
            ref:'user'
        }
    ],
    feedback:{
        type:String
    },
    rating:{
        type:Number
    }
})

module.exports = mongoose.model('feedback',citySchema)
