const express = require('express');
const router = express.Router();
const lotteryController = require('../controllers/lotteryController');

router.get('/results', lotteryController.getLatestResults);
router.post('/bet', lotteryController.placeBet);

module.exports = router;
