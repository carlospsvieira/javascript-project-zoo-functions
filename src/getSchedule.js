const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// ------------ console tests ------------- //
// Species is an array of objects. Name is a key: 'string'. Availability is a key: array.
// Hours is an object. Days are keys: + obj with 2 keys (open and close)

// Return this first:
// const obj = {
//   Tuesday: {
//     officeHour: 'Open from 8am until 6pm', // `Open from ${hours[day].open} until ${hours[day]close}`
// ------ >> Which animal (species.name) is in exhibition on that day ???
//       exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'], // species.availability
//   },
//
// --------------------------------------- //

function getSchedule(scheduleTarget) {
}

module.exports = getSchedule;
