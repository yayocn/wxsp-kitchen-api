/**
 * function: user model
 * auth: yayo
 */

const mongoose = require('../config/db_config');

const userSchema = mongoose.Schema({
  openId: {
    type: String,
    unique: true
  },
  order: [
    {
      type: 'ObjectId',
      ref: 'kitchen_food'
    }
  ]
});

const userModel = mongoose.model('kitchen_user', userSchema);

module.exports = userModel;