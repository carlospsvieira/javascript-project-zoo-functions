const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// ------------ console tests ------------- //
// Species is an array of objects. Name is a key: 'string'. Availability is a key: array.
// Hours is an object. Days are keys: + obj with 2 keys (open and close)

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;

// Schedule for each day of the week. //
// There must be a way to refactor schedule //

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

// return schedule days based on individual day search //
const scheduleDays = (str) => ({
  [str]: schedule[str],
});

// return animal schedule based on animal search //
const getAnimalSchedule = (str) => species.find(({ name }) => name.includes(str)).availability;

// main function to get schedule //
function getSchedule(str) {
  if (species.find(({ name }) => name.includes(str))) return getAnimalSchedule(str);
  if (Object.keys(schedule).includes(str)) return scheduleDays(str);
  if (!str || str.valueOf(undefined)) return schedule;
}

getSchedule();

module.exports = getSchedule;
