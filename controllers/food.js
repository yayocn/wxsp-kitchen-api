/**
 * function: food controoler
 * auth: yayo
 */

// const foodModel = require('../models/foodModel');

const controller = {
  index (req, res) {
    const con = {
      _id: req.params._id
    };

    res.json({
      name: '扬州炒饭',
      pic: 'food_default.png',
      taste: ['好咸啊', '甜的', '乱加的'],
      material: [
        { name: '鸡蛋', quantity: '2个' },
        { name: '米饭', quantity: '300g' },
        { name: '火腿肠', quantity: '100g' },
      ],
      category: { name: '小吃', tab: 'snack' },
      cost: {
        time: 10,
        money: 5
      },
      times: 21
    })
  },
};

module.exports = controller;