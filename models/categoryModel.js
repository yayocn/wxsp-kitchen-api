/**
 * function: category model
 * auth: yayo
 */

const mongoose = require('../config/db_config');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  tab: {
    type: String,
    unique: true,
  }
});

const categoryModel = mongoose.model('kitchen_category', categorySchema);

module.exports = categoryModel;

// const list = [
//   { name: '小吃', tab: 'snack' },
//   { name: '甜点', tab: 'dessert' },
//   { name: '硬菜', tab: 'hardFood' },
//   { name: '汤', tab: 'soup' },
//   { name: '饮料', tab: 'drink' },
//   { name: '炒菜', tab: 'stir-fry' },
//   { name: '炖菜', tab: 'stew' }
// ];
//
// categoryModel.create(list, (err, msg) => {
//   console.log(err)
//   console.log(msg)
// });
