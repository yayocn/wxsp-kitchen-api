/**
 * function: food menu
 * auth: yayo
 */

const express = require('express');
const router = express.Router();
const menus = require('../controllers/menus');

router.get('/', menus.index);

module.exports = router;