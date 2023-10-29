const express = require("express");
const router = express.Router();
const appointmentController = require("../controller/AppointmentController")

router.post('/add',appointmentController.addAppointment);
router.get('/get/:id',appointmentController.getAppointmentById);
router.get('/getUser/:id',appointmentController.getAppointmentofUser);
router.get('/get/',appointmentController.getAppointmentData);
router.put('/update/:id',appointmentController.updateAppointment);
router.delete('/delete/:id',appointmentController.deleteAppointment);
module.exports = router;