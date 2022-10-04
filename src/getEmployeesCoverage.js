const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// -------------- tests ----------------------//
const byName = { name: 'Sharonda' };
const byId = { id: 'c1f50212-35a6-4ecd-8223-f835538526c2' };
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
// console.log(employeeByNameorID);
// --------------------------------------------//

function getEmployeesCoverage(employee) {
  if (!employee) return employees.map((person) => )
  const findEmployee = employees.reduce((acc, person) => {
    if (person.firstName.includes(employee.name)) return person;
    if (person.lastName.includes(employee.name)) return person;
    if (person.id.includes(employee.id)) return person;
    return acc;
  });
  const animals = species.filter((specie) =>
    findEmployee.responsibleFor.includes(specie.id));

  const employeeCoverage = {
    id: findEmployee.id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: animals.map((animal) => animal.name),
    locations: animals.map((animal) => animal.location),
  };
  return employeeCoverage;
}

console.log(getEmployeesCoverage(byName));
module.exports = getEmployeesCoverage;
