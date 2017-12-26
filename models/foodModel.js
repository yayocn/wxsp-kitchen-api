/**
 * function: food model
 * auth: yayo
 */

const mongoose = require('../config/db_config');

const foodSchema = mongoose.Schema({
  // food name
  name: {
    type: String,
    required: true,
    unique: true
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
      type: String,
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
      type: String,
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

// 手动插入一些数据
// const list = [
//   // 小吃
//   {
//     name: '扬州炒饭',
//     pic: 'food_yzcf.jpg',
//     taste: ['salty'],
//     material: [
//       { name: '米饭', quantity: '1份' },
//       { name: '火腿肠', quantity: '1根' },
//       { name: '鸡蛋', quantity: '1枚' },
//       { name: '胡萝卜', quantity: '1根' },
//       { name: '青豌豆' },
//       { name: '肉粒' },
//       { name: '盐' },
//       { name: '葱花' },
//       { name: '食用油' },
//     ],
//     category: ['snack'],
//     cost: {
//       time: '8',
//       money: '6'
//     },
//     times: 0
//   },
//   {
//     name: '鸡蛋仔',
//     pic: 'food_jdz.jpg',
//     taste: ['sweet'],
//     material: [
//       { name: '鸡蛋仔粉' },
//       { name: '牛奶' }
//     ],
//     category: ['snack'],
//     cost: {
//       time: '10',
//       money: '2'
//     },
//     times: 0
//   },
//   {
//     name: '蒸蛋',
//     pic: 'food_zd.jpg',
//     taste: ['sweet', 'salty'],
//     material: [
//       { name: '鸡蛋', quantity: '2枚' },
//       { name: '盐/蜂蜜/白糖' }
//     ],
//     category: ['snack'],
//     cost: {
//       time: '10',
//       money: '3'
//     },
//     times: 0
//   },
//   {
//     name: '狼牙土豆',
//     pic: 'food_lytd.jpg',
//     taste: ['salty', 'sour', 'spicy', 'sweet'],
//     material: [
//       { name: '土豆' },
//       { name: '食用油' },
//       { name: '熟油辣椒' },
//       { name: '花椒粉' },
//       { name: '盐' },
//       { name: '孜然' },
//       { name: '白糖/黑醋/...' }
//     ],
//     category: ['snack'],
//     cost: {
//       time: '15',
//       money: '10'
//     },
//     times: 0
//   },
//   {
//     name: '炒花生米',
//     pic: 'food_chsm.jpg',
//     taste: ['salty'],
//     material: [
//       { name: '花生米' },
//       { name: '食用油' },
//       { name: '盐' },
//     ],
//     category: ['snack'],
//     cost: {
//       time: '10',
//       money: '2'
//     },
//     times: 0
//   },
//   // 甜点
//   {
//     name: '水果拼盘',
//     pic: 'food_sgpp.jpg',
//     taste: ['sweet', 'sour'],
//     material: [
//       { name: '水果' },
//       { name: '酸奶' }
//     ],
//     category: ['dessert'],
//     cost: {
//       time: '10',
//       money: '\?'
//     },
//     times: 0
//   },
//   {
//     name: '果酱面包',
//     pic: 'food_gjmb.jpg',
//     taste: ['sweet'],
//     material: [
//       { name: '切片面包' },
//       { name: '果酱' }
//     ],
//     category: ['dessert'],
//     cost: {
//       time: '2',
//       money: '5'
//     },
//     times: 0
//   },
//   // 硬菜
//   {
//     name: '干锅',
//     pic: 'food_gg.jpg',
//     taste: ['spicy'],
//     material: [
//       { name: '各种肉', quantity: '500g' },
//       { name: '洋葱', quantity: '1枚' },
//       { name: '土豆', quantity: '250g' },
//       { name: '青椒', quantity: '1枚' },
//       { name: '红椒', quantity: '1枚' },
//       { name: '藕', quantity: '200g' },
//       { name: '孜然' },
//       { name: '食用油' },
//       { name: '盐' },
//       { name: '味精' },
//       { name: '花椒' },
//       { name: '干辣椒' },
//       { name: '豆瓣酱' },
//       { name: '料酒' },
//       { name: '姜' },
//       { name: '蒜' },
//       { name: '八角、桂皮、香叶' },
//     ],
//     category: ['hardFood'],
//     cost: {
//       time: '20',
//       money: '20'
//     },
//     times: 0
//   },
//   {
//     name: '可乐鸡翅',
//     pic: 'food_kljc.jpg',
//     taste: ['sweet'],
//     material: [
//       { name: '鸡中翅', quantity: '6块' },
//       { name: '可乐' },
//       { name: '姜' },
//       { name: '料酒' },
//       { name: '食用油' },
//       { name: '牙签', quantity: '1根' }
//     ],
//     category: ['hardFood'],
//     cost: {
//       time: '20',
//       money: '20'
//     },
//     times: 0
//   },
//   // 汤
//   {
//     name: '紫菜粉丝汤',
//     pic: 'food_zcfst.jpg',
//     taste: ['salty'],
//     material: [
//       { name: '紫菜', quantity: '10g' },
//       { name: '粉丝', quantity: '100g' },
//       { name: '姜' },
//       { name: '盐' },
//       { name: '味精' }
//     ],
//     category: ['soup'],
//     cost: {
//       time: '10',
//       money: '3'
//     },
//     times: 0
//   },
//   {
//     name: '素汤',
//     pic: 'food_st.jpg',
//     taste: ['salty'],
//     material: [
//       { name: '时令蔬菜', quantity: '100g' },
//       { name: '姜' },
//       { name: '盐' },
//       { name: '味精' },
//       { name: '食用油' }
//     ],
//     category: ['soup'],
//     cost: {
//       time: '10',
//       money: '4'
//     },
//     times: 0
//   },
//   // drink
//   {
//     name: '西瓜汁',
//     pic: 'food_xgz.jpg',
//     taste: ['salty'],
//     material: [
//       { name: '西瓜', quantity: '500g' },
//       { name: '白糖' }
//     ],
//     category: ['drink'],
//     cost: {
//       time: '10',
//       money: '5'
//     },
//     times: 0
//   },
//   // 炒菜
//   {
//     name: '西红柿炒鸡蛋',
//     pic: 'food_xhscjd.jpg',
//     taste: ['salty', 'sour', 'sweet'],
//     material: [
//       { name: '西红柿', quantity: '2枚' },
//       { name: '鸡蛋', quantity: '2枚' },
//       { name: '盐'},
//       { name: '葱花'},
//       { name: '白糖'},
//       { name: '食用油'}
//     ],
//     category: ['stir-fry'],
//     cost: {
//       time: '10',
//       money: '5'
//     },
//     times: 0
//   },
//   {
//     name: '干煸四季豆',
//     pic: 'food_gbsjd.jpg',
//     taste: ['salty', 'spicy'],
//     material: [
//       { name: '四季豆', quantity: '500g' },
//       { name: '腌菜'},
//       { name: '盐'},
//       { name: '蒜'},
//       { name: '花椒'},
//       { name: '干辣椒'},
//       { name: '食用油'}
//     ],
//     category: ['stir-fry'],
//     cost: {
//       time: '10',
//       money: '8'
//     },
//     times: 0
//   },
//   {
//     name: '蒜薹炒肉',
//     pic: 'food_stcr.jpg',
//     taste: ['salty'],
//     material: [
//       { name: '蒜薹', quantity: '500g' },
//       { name: '精瘦肉', quantity: '100g' },
//       { name: '芡粉'},
//       { name: '盐'},
//       { name: '味精'},
//       { name: '豆瓣酱'},
//       { name: '姜'},
//       { name: '食用油'}
//     ],
//     category: ['stir-fry'],
//     cost: {
//       time: '10',
//       money: '10'
//     },
//     times: 0
//   },
//   {
//     name: '回锅肉',
//     pic: 'food_hgr.jpg',
//     taste: ['salty'],
//     material: [
//       { name: '五花肉', quantity: '200g' },
//       { name: '蒜苗', quantity: '300g' },
//       { name: '盐'},
//       { name: '味精'},
//       { name: '豆瓣酱'},
//       { name: '豆豉'},
//       { name: '姜'},
//       { name: '食用油'}
//     ],
//     category: ['stir-fry'],
//     cost: {
//       time: '10',
//       money: '10'
//     },
//     times: 0
//   },
//   {
//     name: '炒藕片',
//     pic: 'food_cop.jpg',
//     taste: ['salty', 'sour', 'spicy'],
//     material: [
//       { name: '藕', quantity: '400g' },
//       { name: '蒜' },
//       { name: '盐'},
//       { name: '味精'},
//       { name: '干辣椒'},
//       { name: '白醋'},
//       { name: '食用油'}
//     ],
//     category: ['stir-fry'],
//     cost: {
//       time: '10',
//       money: '4'
//     },
//     times: 0
//   },
//   {
//     name: '炒土豆丝',
//     pic: 'food_ctds.jpg',
//     taste: ['salty', 'sour', 'spicy'],
//     material: [
//       { name: '土豆', quantity: '400g' },
//       { name: '青椒', quantity: '1枚' },
//       { name: '蒜' },
//       { name: '盐'},
//       { name: '味精'},
//       { name: '干辣椒'},
//       { name: '白醋'},
//       { name: '食用油'}
//     ],
//     category: ['stir-fry'],
//     cost: {
//       time: '10',
//       money: '4'
//     },
//     times: 0
//   },
//   {
//     name: '麻婆豆腐',
//     pic: 'food_mpdf.jpg',
//     taste: ['salty', 'spicy'],
//     material: [
//       { name: '嫩豆腐', quantity: '1块' },
//       { name: '蒜' },
//       { name: '孜然'},
//       { name: '花椒粉'},
//       { name: '辣椒面'},
//       { name: '味精'},
//       { name: '豆瓣酱'},
//       { name: '食用油'}
//     ],
//     category: ['stir-fry'],
//     cost: {
//       time: '10',
//       money: '4'
//     },
//     times: 0
//   },
//   // 炖菜
//   {
//     name: '炖鸡',
//     pic: 'food_dj.jpg',
//     taste: ['salty'],
//     material: [
//       { name: '鸡肉', quantity: '500g' },
//       { name: '海带', quantity: '100g' },
//       { name: '山药', quantity: '200g' },
//       { name: '冬瓜', quantity: '200g' },
//       { name: '大枣', quantity: '6枚' },
//       { name: '姜' },
//       { name: '蒜' },
//       { name: '味精'},
//       { name: '香油'},
//       { name: '大料、八角、桂皮、香叶' },
//       { name: '食用油'}
//     ],
//     category: ['stew'],
//     cost: {
//       time: '30',
//       money: '20'
//     },
//     times: 0
//   },
// ]
//
// foodModel.create(list, (err, msg) => {
//   console.log(err)
//   console.log(msg)
// })