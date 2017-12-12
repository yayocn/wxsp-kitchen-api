/**
 * function: scene model
 * auth: yayo
 */

const mongoose = require('mongoose');

const sceneSchema = mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  tab: {
    type: String,
    unique: true,
  }
});

const sceneModel = mongoose.model('kitchen_scene', sceneSchema);

module.exports = sceneModel;
