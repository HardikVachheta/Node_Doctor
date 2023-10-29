const mongoose = require("mongoose");
const Schema = mongoose.Schema

// const indianCitiesDatabase = require('indian-cities-database');
// var cities = indianCitiesDatabase.cities;

const StateSchema = new Schema({
    statename: {
        type: String
    }
})

module.exports = mongoose.model('state', StateSchema)




// state=>city=>clinic=>appointment
