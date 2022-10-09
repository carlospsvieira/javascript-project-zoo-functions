const data = require('../data/zoo_data');

const locationTable = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

function getAnimalMap(options) {
  if (!options || !Object.keys(options).includes('includeNames')) return locationTable;
}

module.exports = getAnimalMap;
