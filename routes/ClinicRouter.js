const express = require('express')
const router = express.Router()
const ClinicController = require('../controller/ClinicController')

router.get('/get',ClinicController.getClinicData)
router.get('/get1/:id',ClinicController.getClinicDataWithDoctor)
router.post('/add',ClinicController.addClinic)
router.delete('/delete/:id',ClinicController.deleteClinic)

module.exports = router
