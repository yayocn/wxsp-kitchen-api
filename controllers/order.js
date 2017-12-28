/**
 * function: order controller
 * auth: yayo
 */
const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');
const _ = require('lodash');

const controller = {
  getOrder (req, res) {

  },
  update (req, res) {
    const orderId = req.body._id;
    const con = {
      user: req.body.openId,
      foods: _.map(req.body.orderList, item => item._id)
    }

    if (orderId) {
      // 更新

    } else {
      // 新增
      orderModel.create(con, (err, msg) => {
        if (err) {
          console.log(err);
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
                    res.send('ok');
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
                    res.send('ok');
                  }
                })
              }
            }
          })
        }
      })
    }

    // orderModel.create(con, (err, msg) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(msg)
    //   }
    // })
  }
};

module.exports = controller;
