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
        _id: 1,
        name: '鸡蛋仔',
        pic: 'food_default.png'
      },
      {
        _id: 2,
        name: '鸡蛋仔',
        pic: 'food_default.png'
      },
      {
        _id: 3,
        name: '鸡蛋仔',
        pic: 'food_default.png'
      },
      {
        _id: 4,
        name: '鸡蛋仔',
        pic: 'food_default.png'
      }
    ]);
  },
  delete (req, res) {
    const con = {
      _id: req.params._id
    };

    res.send([
      {
        _id: 3,
        name: '鸡蛋仔',
        pic: 'food_default.png'
      },
      {
        _id: 4,
        name: '鸡蛋仔',
        pic: 'food_default.png'
      }
    ]);
  }
};

module.exports = controller;
