/**
 * function: scene model
 * auth: yayo
 */

const mongoose = require('../config/db_config');

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

// 手动插入数据
// const list = [
//   { name: '酸', tab: 'sour' },
//   { name: '甜', tab: 'sweet' },
//   { name: '苦', tab: 'bitter' },
//   { name: '辣', tab: 'spicy' },
//   { name: '咸', tab: 'salty' },
//   { name: '凉', tab: 'cold' },
//   { name: '冰', tab: 'iced' }
// ];
//
// tasteModel.create(list, (err, msg) => {
//   console.log(err)
//   console.log(msg)
// })