const express = require('express')
const router = express.Router()
const body_parser = require('body-parser')
router.use(body_parser.json())
const contactController = require('../controller/contactController')

// http://localhost:8888/api/contact/create
router.post('/create',contactController.createContact)
// http://localhost:8888/api/contact/update/66f11db9994c764f196270f6
router.put('/update/:id',contactController.updateContact)
// http://localhost:8888/api/contact/delete/66f11db9994c764f196270f6
router.delete('/delete/:id',contactController.deleteContact)
// http://localhost:8888/api/contact/getcontact
router.get('/getcontact',contactController.getAllContact)


module.exports = router