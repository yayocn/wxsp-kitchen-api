/**
 * function: order controller
 * auth: yayo
 */

const controller = {
  index (req, res) {
    const con = {
      _id: req.params._id
    };

    res.send([
      {
        name: '鸡蛋仔',
        pic: 'food_default.png'
      },
      {
        name: '鸡蛋仔',
        pic: 'food_default.png'
      },
      {
        name: '鸡蛋仔',
        pic: 'food_default.png'
      },
      {
        name: '鸡蛋仔',
        pic: 'food_default.png'
      }
    ]);
  }
};

module.exports = controller;
