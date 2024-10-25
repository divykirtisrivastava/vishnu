const express = require('express')
const router = express.Router()
const adminController= require('../controllers/adminController.js')

router.post('/adminsave',adminController.adminsave)
router.post('/adminLogin',adminController.adminLogin)

module.exports = router