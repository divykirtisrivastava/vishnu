const express=require('express')
const router=express.Router()
const contactController=require('../controllers/contactController')


router.post('/contactSave',contactController.contactSave)
router.get('/getContact',contactController.getContact)
router.delete('/deleteContact/:id',contactController.deleteContact)
router.get('/viewContact/:id',contactController.viewContact)
router.put('/updateContact/:id',contactController.updateContact)


module.exports=router