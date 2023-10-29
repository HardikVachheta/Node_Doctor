const express = require('express')
const router = express.Router()
const CityController = require('../controller/CityController')

router.get('/get',CityController.getCityData)
router.get('/get/:id',CityController.getCityById)
router.get('/get1',CityController.getCityDataWithState)

router.post('/add',CityController.addCity)
router.delete('/delete/:id',CityController.deleteCity)
router.put('/update/:id',CityController.updateCity)

module.exports = router
