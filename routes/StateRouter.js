const express = require('express')
const router = express.Router()
const stateController = require('../controller/StateController')

router.get('/get',stateController.getStateData)
router.get('/get/:id',stateController.getStateById)
router.post('/add',stateController.addState)
router.delete('/delete/:id',stateController.deleteState)
router.put('/update/:id',stateController.updateState)

module.exports = router
