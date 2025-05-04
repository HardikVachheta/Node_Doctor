require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));

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


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected successfully!");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});
// mongoose.connect("mongodb://127.0.0.1:27017/doctor_mg", {}, (err) => {
//     if (err) {
//         console.log("error in db connections....")
//     }
//     else {
//         console.log("db connected....")
//     }
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})



