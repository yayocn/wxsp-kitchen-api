/**
 * function: order router
 * auth: yayo
 */

const express = require('express');
const router = express.Router();
const order = require('../controllers/order');

router.get('/:openId', order.getOrder);

router.post('/update', order.update);

router.get('/unfinished/:openId', order.unfinished);

module.exports = router;
