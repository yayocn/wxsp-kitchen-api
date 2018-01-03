/**
 * function: order controller
 * auth: yayo
 */
const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');
const foodModel = require('../models/foodModel');
const _ = require('lodash');

const controller = {
  getOrder (req, res) {

  },
  update (req, res) {
    const orderId = req.body.orderListId;
    const user = req.body.openId;
    const foods = _.map(req.body.orderList, item => item._id);
    
    if (orderId) {
      // 更新
      const con = {
        _id: orderId
      };

      orderModel.update(con, { $set: { foods: foods } }, { _id: 1 }, (err, msg) => {
        if (err) {
          res.send('error');
        } else {
          res.send('ok');
        }
      })
    } else {
      // 新增
      const con = {
        user,
        foods
      };

      orderModel.create(con, (err, msg) => {
        if (err) {
          res.send('error');
        } else {
          userModel.findOne({ openId: req.body.openId }, (err, data) => {
            if (err) {
              res.send('error');
            } else {
              if (data) {
                userModel.update({ openId: req.body.openId }, {
                  $push: { orderList: msg._id }
                }, (err, userMsg) => {
                  if (err) {
                    res.send('error');
                  } else {
                    res.json({ orderListId: msg._id });
                  }
                })
              } else {
                userModel.create({
                  openId: req.body.openId,
                  orderList: [msg._id]
                }, (err, userMsg) => {
                  if (err) {
                    res.send('error');
                  } else {
                    res.json({ orderListId: msg._id });
                  }
                })
              }
            }
          })
        }
      })
    }
  },
  unfinished (req, res) {
    const con = {
      user: req.params.openId,
      isFinish: false
    };


    orderModel.findOne(con)
      .populate('foods', { name: 1, pic: 1 })
      .exec((err, foodData) => {
        if (err) {
          res.send('error');
        } else {
          res.send(foodData);
        }
      })
  },
  orderList (req, res) {
    const con = {};
    if (req.body.isFinish != undefined) {
      con.isFinish = req.body.isFinish;
    }

    console.log(con)

    orderModel.find(con)
      .populate('foods', { name: 1, pic: 1 })
      .exec((err, foodData) => {
        if (err) {
          res.send('error');
        } else {
          res.send(foodData);
        }
      })
  },
  completeOrder (req, res) {
    const con = {
      _id: req.params.orderId
    };

    orderModel.update(con, { $set: { isFinish: true }}, (err, msg) => {
      if (err) {
        res.send('error');
      } else {
        res.send('ok');
      }
    })
  }
};

module.exports = controller;
