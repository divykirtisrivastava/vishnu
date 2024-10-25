const express = require('express');
const router = express.Router();
const withrawalController = require('../controllers/withrawalController.js');
const upload = require('../multerConfig.js');

router.post('/withrawalRequest', withrawalController.withrawalRequest)
router.get('/getwithrawalRequest', withrawalController.getwithrawalRequest)
router.get('/getwithrawalHistory/:email/:paymentMethod/:fromDate/:toDate', withrawalController.searchWithrawal)
router.put('/updatewithrawalRequest/:id', withrawalController.updatewithrawalRequest)

module.exports = router;