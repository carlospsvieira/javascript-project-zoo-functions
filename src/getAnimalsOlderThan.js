const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find((group) => group.name === animal);
  return residents.every((it) => it.age >= age);
}

module.exports = getAnimalsOlderThan;
