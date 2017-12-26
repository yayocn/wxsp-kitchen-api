/**
 * function: food controoler
 * auth: yayo
 */

const foodModel = require('../models/foodModel');

const controller = {
  index (req, res) {
    const con = {
      _id: req.params._id
    };

    foodModel.findOne(con, (err, data) => {
      if (err) {
        console.log(err);
        res.send('error');
      } else {
        res.json(data);
      }
    })
  },
};

module.exports = controller;