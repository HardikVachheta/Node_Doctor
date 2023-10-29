const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')

router.get('/user',userController.getUserData)
router.get('/user/:id',userController.getUserById)
router.get('/user1',userController.getUserDataWithRole)

router.post('/user',userController.addUser)
router.post('/user/login',userController.loginUser)
router.post('/user/forgot',userController.forgot)

router.put('/update/:id',userController.updateUser)

router.delete('/user/:id',userController.deleteUser)

// const mailSendController = require('../controller/MailSendController');
router.post('/send', userController.sendMail);

module.exports = router

