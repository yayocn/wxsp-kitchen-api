/**
 * function: menus controller
 * auto: yayo
 */
const foodModel = require('../models/foodModel');
const _ = require('lodash');

const controller = {
  index (req, res) {
    let con = {};
    foodModel.find(con, { name: 1, pic: 1, taste: 1, category: 1, times: 1 }, (err, data) => {
      if (err) {
        console.log(err);
        res.send('error');
      } else {
        let result = _.groupBy(data, 'category');
        res.json(result);
      }
    })
  }
};

module.exports = controller;
