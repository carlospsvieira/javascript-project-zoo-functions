const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// --------- console tests ------------- //
// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

// Verify whether a person is a manager or not (return true if any (some) are true)//
// const managersss = employees.some(({ managers }) => managers.includes('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(managersss);
// ----------------------------- //
// If isManager is true return a list of employees working under this managaner //
// const workingUnder = employees.filter(({ managers }) => managers.includes(managerId))
// console.log(workingUner);

// After finding these employees return first and last name in one list (array)//
// workingUnder.map((employee) => `${employee.firstName} ${employee.lastName}`);
// ------------------------------- //

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter(({ managers }) => managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
