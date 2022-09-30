const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// ------- console tests ---------------- //
// Return total number of animals by species if there isn't any parameters //
// It has to be an object with species name as key and total number (length) as its value //
// if (!animal) {
//   const speeecies = species.reduce((acc, specie) =>
//     ({ ...acc, [specie.name]: specie.residents.length }), {});
//   console.log(speeecies);
// }
// if parameter is an object with key(specie)and value(specie's name) eg: {specie: 'lion'} returns the residents.length
// const { residents } = species.find(({ name }) => name === animal.specie);
// return residents.length
// if ('sex' in animal) return residents.filter(({sex}) => sex === animal.sex).length;
// -------------------------------------- //

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) =>
      ({ ...acc, [specie.name]: specie.residents.length }), {});
  }
  const { residents } = species.find(({ name }) => name === animal.specie);
  if ('sex' in animal) {
    return residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return residents.length;
}

module.exports = countAnimals;
