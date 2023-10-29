const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    
    email:{
        type:String
    },
    password:{
        type:String
    },
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    gender:{
        type:String
    },
    role:
        {
            type:Schema.Types.ObjectId,
            ref:'role'
        }
    ,
    status:{
        type:Number
    },
    profile_pic:{
        type:String
    }
})

module.exports = mongoose.model('user',UserSchema)
