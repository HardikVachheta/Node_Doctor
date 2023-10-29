const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CitySchema = new Schema({
    cityname:{
        type:String
    }
    ,
    stateId:
        {
            type:Schema.Types.ObjectId,
            ref:'state'
        }
    
})

module.exports = mongoose.model('city',CitySchema)
