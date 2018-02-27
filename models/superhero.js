const mongoose = require('mongoose');

const superheroSchema = mongoose.Schema({
  name: { type: String, required: true },
  realName: {type: String},
  image: { type: String, required: true },
  height: {type: String},
  abilities: {type: String},
  powers: { type: String, required: true },
  weakness: { type: String, required: true },
  groups: {type: String, required: true}
});

superheroSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('superhero', superheroSchema);
