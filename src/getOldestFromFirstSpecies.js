const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// -------------- test -------------------------------//
// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

// A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;

// A função deverá encontrar o animal mais velho daquela espécie;

// A função deverá retornar um array com as informações do animal mais velho daquela espécie.

function getOldestFromFirstSpecies(id) {
  const first = employees.find((person) =>
    person.id.includes(id)).responsibleFor[0];

  const residentsList = species.find((specie) =>
    specie.id.includes(first)).residents;

  const oldest = residentsList.reduce((acc, specie) => {
    if (acc.age > specie.age) return acc;
    return specie;
  });

  const { name, sex, age } = oldest;
  return [name, sex, age];
}

// console.log(getOldestFromFirstSpecies(stephanieId));

module.exports = getOldestFromFirstSpecies;
