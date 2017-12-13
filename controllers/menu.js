/**
 * function: menus controller
 * auto: yayo
 */

const controller = {
  index (req, res) {
    res.json({
      snack: [
        {
          name: '扬州炒饭',
          pic: 'food_default.png',
          taste: ['好咸啊', '甜的', '乱加的'],
          times: 21
        },
        {
          name: '鸡蛋仔',
          pic: 'food_default.png',
          taste: ['甜的'],
          times: 88
        }
      ]
    });
  }
};

module.exports = controller;
