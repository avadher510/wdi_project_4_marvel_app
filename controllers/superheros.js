const Superhero = require('../models/superhero');

function superherosIndex(req, res, next) {
  Superhero
    .find()
    .exec()
    .then(superheros => res.json(superheros))
    .catch(next);
}

function superherosCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Superhero
    .create(req.body)
    .then(superhero => res.status(201).json(superhero))
    .catch(next);
}

function superherosShow(req, res, next) {
  Superhero
    .findById(req.params.id)
    .exec()
    .then((superhero) => {
      if(!superhero) return res.notFound();
      res.json(superhero);
    })
    .catch(next);
}

function superherosUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Superhero
    .findById(req.params.id)
    .exec()
    .then((superhero) => {
      if(!superhero) return res.notFound();
      superhero = Object.assign(superhero, req.body);
      return superhero.save();
    })
    .then(superhero => res.json(superhero))
    .catch(next);
}

function superherosDelete(req, res, next) {
  Superhero
    .findById(req.params.id)
    .exec()
    .then((superhero) => {
      if(!superhero) return res.notFound();
      return superhero.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: superherosIndex,
  create: superherosCreate,
  show: superherosShow,
  update: superherosUpdate,
  delete: superherosDelete
};
