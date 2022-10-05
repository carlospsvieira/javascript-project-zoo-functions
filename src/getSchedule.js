// const { species, hours } = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// ------------ console tests ------------- //
// Species is an array of objects. Name is a key: 'string'. Availability is a key: array.
// Hours is an object. Days are keys: + obj with 2 keys (open and close)

// Return this:
// const obj = {
//   Tuesday: {
//     officeHour: 'Open from 8am until 6pm', // `Open from ${hours[day].open} until ${hours[day]close}`
// ------ >> Which animal (species.name) is in exhibition on that day ???
//       exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'], // species.availability
//   },
//
// --------------------------------------- //
const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;

const schedule = {
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: species.reduce((acc, specie) => {
      if (specie.availability.includes('Tuesday')) acc.push(specie.name);
      return acc;
    }, []),
  },
  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: species.reduce((acc, specie) => {
      if (specie.availability.includes('Wednesday')) acc.push(specie.name);
      return acc;
    }, []),
  },
  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: species.reduce((acc, specie) => {
      if (specie.availability.includes('Thursday')) acc.push(specie.name);
      return acc;
    }, []),
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: species.reduce((acc, specie) => {
      if (specie.availability.includes('Friday')) acc.push(specie.name);
      return acc;
    }, []),
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: species.reduce((acc, specie) => {
      if (specie.availability.includes('Saturday')) acc.push(specie.name);
      return acc;
    }, []),
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: species.reduce((acc, specie) => {
      if (specie.availability.includes('Sunday')) acc.push(specie.name);
      return acc;
    }, []),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(str) {
  if (!str) return schedule;
  if (species.filter((specie) => specie.name.includes(str))) {
    return species.find(({ name }) => name.includes(str)).availability;
  }
}

// console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
