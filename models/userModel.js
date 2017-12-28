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
  orderList: [
    {
      type: 'ObjectId',
      ref: 'kitchen_order'
    }
  ]
});

const userModel = mongoose.model('kitchen_user', userSchema);

module.exports = userModel;