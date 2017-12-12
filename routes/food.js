/**
 * function: food router
 * auth: yayo
 */
const express = require('express');
const router = express.Router();
const food = require('../controllers/food');

router.get('/:_id', food.index);

module.exports = router;
