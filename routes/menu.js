/**
 * function: food menu
 * auth: yayo
 */

const express = require('express');
const router = express.Router();
const menu = require('../controllers/menu');

router.get('/', menu.index);

module.exports = router;