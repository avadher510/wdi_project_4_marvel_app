const Superhero = require('../models/superhero');

function superherosIndex(req, res, next) {
  Superhero
    .find()
    .exec()
    .then(superheros => res.json(superheros))
    .catch(next);
}

module.exports = {
  index: superherosIndex
};
