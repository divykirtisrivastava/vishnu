const express = require('express');
const router = express.Router();
const depositeController = require('../controllers/depositeController.js');
const upload = require('../multerConfig.js');

router.post('/depositeRequest',upload.single('transactionImage'), depositeController.depositeRequest)
router.get('/getdepositeRequest', depositeController.getdepositeRequest)
router.get('/getdepositeHistory/:email/:paymentMethod/:fromDate/:toDate', depositeController.searchDeposite)
router.put('/updatedepositeRequest/:id',upload.single('transactionImage'), depositeController.updatedepositeRequest)

module.exports = router;