/**
 * function: order router
 * auth: yayo
 */

const express = require('express');
const router = express.Router();
const order = require('../controllers/order');

router.get('/:_id', order.index);

module.exports = router;
