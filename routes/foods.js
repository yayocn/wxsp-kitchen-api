/**
 * function: food router
 * auth: yayo
 */
const express = require('express');
const router = express.Router();
const foods = require('../controllers/foods');

router.get('/:_id', foods.index);

module.exports = router;
