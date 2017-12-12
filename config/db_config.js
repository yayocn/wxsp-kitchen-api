/**
 * function: mongodb config
 * auth: yayo
 */

const mongoose = require('mongoose');

const dbUrl = 'mongodb://admin:admin@localhost:27017/kitchen';

mongoose.connect(dbUrl, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('============================================')
  console.log('==========  connect successfully  ==========')
  console.log('============================================')
})

module.exports = mongoose;