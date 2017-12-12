/**
 * function: food model
 * auth: yayo
 */

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  // food name
  name: {
    type: String,
    required: true
  },
  // food picture
  pic: {
    type: String,
    required: true,
    default: 'food_default.jpg'
  },
  // food tab. For example, sour, sweet, bitter, spicy
  taste: [
    {
      type: 'ObjectId',
      ref: 'kitchen_taste'
    }
  ],
  // the material of the food
  material: [
    {
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true,
        default: '适量'
      }
    }
  ],
  // when to cook
  category: [
    {
      type: 'ObejctId',
      ref: 'kitchen_category'
    }
  ],
  // how much will pay for it.
  // time use minute
  // money use rmb
  cost: {
    time: {
      type: Number
    },
    money: {
      type: Number
    }
  },
  // times
  times: {
    type: Number
  }
});

const foodModel = mongoose.model('kitchen_food', foodSchema);

module.exports = foodModel;