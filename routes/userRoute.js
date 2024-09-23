const express = require('express')
const router = express.Router()
const body_parser = require('body-parser')
router.use(body_parser.json())
const userController = require('../controller/userController')

// http://localhost:8888/api/signup
router.post('/signup',userController.registerUser)
// http://localhost:8888/api/signin
router.post('/signin',userController.loginUser)

module.exports = router