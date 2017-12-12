/**
 * function: scene model
 * auth: yayo
 */

const mongoose = require('mongoose');

const tasteSchema = mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  tab: {
    type: String,
    unique: true,
  }
});

const tasteModel = mongoose.model('kitchen_taste', tasteSchema);

module.exports = tasteModel;
