/**
 * function: order model
 * author: yayo
 */

const mongoose = require('../config/db_config');

const orderSchema = mongoose.Schema({
  foods: [
    {
      type: 'ObjectId',
      ref: 'kitchen_food'
    }
  ],
  user: {
    type: String,
    ref: 'kitchen_user'
  },
  time: {
    type: Date,
    default: Date.now
  },
  isFinish: {
    type: Boolean,
    default: false
  }
});

const orderModel = mongoose.model('kitchen_order', orderSchema);

module.exports = orderModel;
