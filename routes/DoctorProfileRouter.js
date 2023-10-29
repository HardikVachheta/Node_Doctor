const express = require("express");
const router = express.Router();
const doctorProfileController = require('../controller/DoctorProfileController')

router.get('/get/:id',doctorProfileController.getDoctorDataWithUser)
router.get('/get1/:id',doctorProfileController.getDoctorById)
router.get('/get',doctorProfileController.getDoctor2)
router.get('/get2',doctorProfileController.getDoctor3)
router.post('/add1',doctorProfileController.addDoctor)
router.post('/upload',doctorProfileController.uploadFile)
router.put('/get1',doctorProfileController.updateDoctorDataWithUser)
router.put('/update/:id',doctorProfileController.updateDoctor)
router.delete('/delete/:id',doctorProfileController.deleteDoctor)

module.exports=router
