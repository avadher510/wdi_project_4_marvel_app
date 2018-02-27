const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Superhero      = require('../models/superhero');

const superheroData = [{
  name: 'Thor',
  realName: 'Thor Odinson',
  image: 'https://i.annihil.us/u/prod/marvel/i/mg/7/10/537bc71e9286f.jpg',
  height: '6ft 6',
  abilities: 'Thor is trained in the arts of war, being a superbly skilled warrior, highly proficient in hand-to-hand combat, swordsmanship and hammer throwing',
  powers: 'As the son of Odin and Gaea, Thors strength, endurance and resistance to injury are greater than the vast majority of his superhuman race. He is extremely long-lived (though not completely immune to aging), immune to conventional disease and highly resistant to injury. His flesh and bones are several times denser than a humans.As Lord of Asgard, Thor possessed the Odinforce, which enabled him to tap into the near-infinite resources of cosmic and mystical energies, enhancing all of his abilities. With the vast magical power of the Odinforce, Thor was even able to dent Captain America’s virtually indestructible shield with Mjolnir',
  weakness: 'No Weakness',
  groups: 'Gods of Asgard, Avengers; formerly Queen’s Vengeance, Godpack, Thor Corps'
}];

mongoose.connect(dbURI)
  .then(db => db.dropDatabase())
  .then(() => Superhero.create(superheroData))
  .then(superheros => console.log(`${superheros.length} superheros created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
