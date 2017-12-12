/**
 * function: menus controller
 * auto: yayo
 */

const controller = {
  index (req, res) {
    res.send([{
      name: '扬州炒饭',
      pic: 'food_default.jpg',
      taste: ['salty'],
      material: [
        { name: '鸡蛋', quantity: '2个' },
        { name: '米饭', quantity: '300g' },
        { name: '火腿肠', quantity: '100g' },
      ],
      scene: ['晚餐','午餐'],
      cost: {
        time: 10,
        money: 5
      },
      times: 21
    }]);
  }
};

module.exports = controller;
