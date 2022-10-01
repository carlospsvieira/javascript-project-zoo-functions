const data = require('../data/zoo_data');

// ----------- console tests ------------ //
// countEntrants receives an array of objs and returns the number of times each age appears in new obj //
// .reduce will count how many ages appear and separate them in new obj
// new obj has to receive new keys child, adult and senior
// separate child, adult and senior in keys with total number of times they appear. //
// const entryees = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// if (person.includes('child')) acc.child *= 20.99;
// if (person.includes('adult')) acc.adult *= 20.99;
// if (person.includes('senior')) acc.senior *= 20.99;
// ---------------------------------- //
//

function countEntrants(entrants) {
  return entrants.reduce((acc, person) => {
    if (person.age < 18) acc.child += 1;
    if (person.age >= 18 && person.age < 50) acc.adult += 1;
    if (person.age >= 50) acc.senior += 1;
    return acc;
  }, {
    child: 0,
    adult: 0,
    senior: 0,
  });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const totalCost = (child * 20.99) + (adult * 49.99) + (senior * 24.99);
  return totalCost;
}

module.exports = { calculateEntry, countEntrants };
