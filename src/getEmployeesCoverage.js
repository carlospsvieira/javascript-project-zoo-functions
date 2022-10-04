const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// -------------- tests ----------------------//
// const byName = { name: 'Sharonda' };
// const byId = { id: 'c1f50212-35a6-4ecd-8223-f835538526c2' };
// Return this:
// {
// id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
// fullName: "Sharonda Spry", // nome completo: firstName + lastName
// species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
// locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }
//
// function will receive an obj as parameter. {id: - } or {name: - }
// const obj = {
//   id: employee.id,
//   fullName: `${employee.firstName} ${employee.lastName}`,
//   species: employee.responsibleFor,
//   locations: [employee.responsibleFor.map((specie) => specie.location)],
// };
// --------------------------------------------//

// const findEmployee = (employee) =>
//   employees.reduce((acc, person) => {
//     if (person.firstName.includes(employee.name)) return person;
//     if (person.lastName.includes(employee.name)) return person;
//     if (person.id.includes(employee.id)) return person;
//     return acc;
//   }); ------->> is async function, so it doesn't work when throwing errors.

// 'function call' works for throwing errors (src: MDN) //

const findEmployee = (employee) => {
  if (employee.name) {
    return employees.find((person) =>
      person.firstName.includes(employee.name) || person.lastName.includes(employee.name));
  }
  if (employee.id) {
    return employees.find((person) => person.id.includes(employee.id));
  }
};

const employeeInfo = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: species.filter((specie) =>
    employee.responsibleFor.includes(specie.id)).map((animal) => animal.name),
  locations: species.filter((specie) =>
    employee.responsibleFor.includes(specie.id)).map((animal) => animal.location),
});

function getEmployeesCoverage(employee) {
  // returns all employees' info in case there's no parameter //
  if (!employee) return employees.map((person) => employeeInfo(person));
  // throw an error in case the parameter does not exist in data //
  if (!findEmployee(employee)) throw new Error('Informações inválidas');
  // returs wanted employee's info ----->> //
  return employeeInfo(findEmployee(employee));
}

// console.log(getEmployeesCoverage(byName));
module.exports = getEmployeesCoverage;
