const express=require('express')
const router=express.Router()
const statusController = require('../controllers/statusController')

router.post('/statusSave',statusController.statusSave)

router.get('/getStatus',statusController.getStatus)
router.delete('/deleteStatus/:id',statusController.deleteStatus)
router.get('/viewStatus/:id',statusController.getStatus)

router.put('/updateStatus', statusController.updateStatus)

module.exports=router