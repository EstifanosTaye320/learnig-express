const fs = require("fs");
const path = require("path");
const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let employees;

class Employees {
  constructor(id, name, position, department) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.department = department;
  }
}

async function addEmployee(id, name, position, department) {
  // ...
  try {
    const new_employee = createEmployee(id, name, position, department);
    employees.push(new_employee);
    await upload();
  } catch (err) {
    console.log(err.message);
  }
}

function listEmployees() {
  // ...
  for (let employee of employees) {
    console.log(employee);
  }
}

function findEmployee(id) {
  // ...
  console.log(employees.find((employee) => employee.id == id));
}

async function updateEmployee(id, newName, newPosition, newDepartment) {
  // ...
  const index = employees.indexOf(
    employees.find((employee) => employee.id == id)
  );
  const employee = employees[index];
  if (newName) {
    employee.name = newName;
  }
  if (newPosition) {
    employee.position = newPosition;
  }
  if (newDepartment) {
    employee.department = newDepartment;
  }
  await upload();
}

async function deleteEmployee(id) {
  // ...
  const index = employees.indexOf(
    employees.find((employee) => employee.id == id)
  );
  employees.splice(index, 1);
  await upload();
}

function createEmployee(id, name, position, department) {
  return new Employees(id, name, position, department);
}

async function upload() {
  // ...
  fs.writeFile(
    path.join(__dirname, "employees.json"),
    JSON.stringify(employees),
    function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Employees changed");
      }
    }
  );
  loadData();
}

async function loadData() {
  fs.readFile(path.join(__dirname, "employees.json"), function (err, data) {
    if (err) {
      return console.log(err);
    } else {
      employees = JSON.parse(data);
    }
  });
}

async function main() {
  await loadData();
  interface.question(
    `
            Pick an option from the following
            1. addEmployee
            2. listEmployees
            3. findById
            4. updateEmployee
            5. deleteEmployee
        `,
    function (option) {
      switch (option) {
        case "1":
          interface.question(
            "Enter the properties like this 'id name position department': ",
            async function (att) {
              const attributes = att.split(" ");
              await addEmployee(
                parseInt(attributes[0]),
                attributes[1],
                attributes[2],
                attributes[3]
              );
              interface.close();
            }
          );
          return;
        case "2":
          listEmployees();
          interface.close();
          return;
        case "3":
          interface.question("Enter the id: ", function (data) {
            const id = parseInt(data);
            findEmployee(id);
            interface.close();
          });
          return;
        case "4":
          interface.question(
            "Enter the new fileds 'id name position department' write 'null' if field unchanged: ",
            async function (att) {
              const attributes = att.split(" ");
              attributes.forEach((ele, ind) => {
                if (ele === "null") {
                  delete attributes[ind];
                }
              });
              await updateEmployee(
                parseInt(attributes[0]),
                attributes[1],
                attributes[2],
                attributes[3]
              );
              interface.close();
            }
          );
          return;
        case "5":
          interface.question("Enter the id: ", async function (data) {
            const id = parseInt(data);
            await deleteEmployee(id);
            interface.close();
          });
          return;
        default:
          console.log("wrong option sorry try 1, 2, 3, 4, 5");
          interface.close();
          return;
      }
    }
  );
}

main();
