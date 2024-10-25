const express=require('express')
const router=express.Router()
const signController=require('../controllers/signController.js')

router.post('/signSave',signController.signSave)
router.post('/paymentSave',signController.paymentSave)
router.post('/clientLogin',signController.clientLogin)
router.post('/clientVerify',signController.verifyClient)


router.get('/getsignbyemail/:email',signController.getSignByEmail)
router.get('/getsignbyid/:id',signController.getSignById)
router.delete('/deleteSign/:id',signController.deleteSign)
router.get('/viewSign',signController.viewSign)
router.get('/viewPayment',signController.paymentView)

router.put('/upadteSign/:id', signController.updateSign)

module.exports=router