const express=require('express')
const router=express.Router()
const enquiryController = require('../controllers/enquiryController')

router.post('/enquirySave',enquiryController.enquirySave)
router.get('/getEnquiry',enquiryController.getEnquiry)
router.delete('/deleteEnquiry/:id',enquiryController.deleteEnquiry)
router.get('/viewEnquiry/:id',enquiryController.viewEnquiry)
router.put('/updateEnquiry/:id',enquiryController.updateEnquiry)

module.exports=router