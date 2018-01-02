/**
 * function: user controller
 * auth: yayo
 */
const userModel = require('../models/userModel');

const controller = {
  getUserInfo (req, res) {
    const con = {
      openId: req.params.openId
    };

    userModel.findOne(con, (err, userData) => {
      if (err) {
        res.send('error');
      } else {
        res.json(userData);
      }
    })
  }
}

module.exports = controller;