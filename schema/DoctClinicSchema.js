const mongoose = require("mongoose");
const Schema = mongoose.Schema

const DoctclinicSchema = new Schema({
    docid:[
        {
            type:Schema.Types.ObjectId,
            ref:'user'

        }
    ],clinicid:[
        {
            type:Schema.Types.ObjectId,
            ref:'clinic'

        }
    ],
})

module.exports = mongoose.model('doctclinic',DoctclinicSchema)
