const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')


// const indianCitiesDatabase = require('indian-cities-database');
// var cities = indianCitiesDatabase.cities;


app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

const userRouter = require('./routes/UserRoutes')
const roleRouter = require('./routes/RoleRoutes')
const doctorProfileRouter = require('./routes/DoctorProfileRouter')
const stateRouter = require('./routes/StateRouter')
const cityRouter = require('./routes/CityRoutes')
const clinicRouter = require('./routes/ClinicRouter')
const appointmentRouter = require('./routes/AppointmentRoutes')


app.use('/user', userRouter)
app.use('/role', roleRouter)
app.use('/doctor', doctorProfileRouter)
app.use('/state', stateRouter)
app.use('/city', cityRouter)
app.use('/clinic', clinicRouter)
app.use('/appointment', appointmentRouter)


mongoose.connect("mongodb://127.0.0.1:27017/doctor_mg", {}, (err) => {
    if (err) {
        console.log("error in db connections....")
    }
    else {
        console.log("db connected....")
    }
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})



