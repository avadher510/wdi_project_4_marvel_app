const router = require('express').Router();
const superheros  = require('../controllers/superheros');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/superheros')
  .get(superheros.index)
  .post(secureRoute, superheros.create);

router.route('/superheros/:id')
  .get(superheros.show)
  .put(secureRoute, superheros.update)
  .delete(secureRoute, superheros.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
