const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const showBanner = require('node-banner');
const Information = require("./Information");
const prompts = require("./prompts");

const connection = mysql.createConnection({
  port: 3306,
  user: "root",
  password: "Fall2019",
  database: "employee_db"
});
  //BANNER 
  (async () => {
    await showBanner('JoJos \nEmployee \n APP', 'For viewing, & managing employees');
  })();

// connect to the mysql server and sql database

connection.connect(function(err) {
  if (err) throw err;
  console.log("Oh Hi there!")
  start(); // AND START!!
  // Information.queryAllEmployees();
});

 start = () => {
  inquirer
    .prompt(prompts.prompts)
    .then(answers => {
      switch (answers.choices) {
        case "Show Departments":
          Information.showDepartments();
          break;

        case "Show Employees":
          Information.queryAllEmployees();
          break

        case "Show Roles":
          Information.showRoles();
          break

        case "Sign off":
          Information.exit();
      }
    })
  }

  module.exports = {
    start
  }
//   const ShowEmployees = () => {
//     var query = "SELECT * FROM employees";
//     connection.query(query, function(err, res) {
//       if(err)
//       return err;
//       console.log("\n");
//       console.table(res);
//       start();
//     })
//   }

// function addFunction() {
//   inquirer
//     .prompt([
//       {
//         name: "firstName",
//         type: "input",
//         message: "What is the first name of the new employee?"
//       },
//       {
//         name: "lastName",
//         type: "input",
//         message: "What is the last name of the new employee?"
//       },
//       {
//         name: "role",
//         type: "list",
//         message: "What is the role for our new employee?",
//         choices: ["Back-end Developer",
//       "Front-End Dev", "Software Engineer", "Sr. Developer", "Marketing", "Sales"]
//       },
//       {
//         name: "manager_id",
//         type: "input",
//         message: "What is the manager id for the new employee?"
//       }
//     ])
//     .then(function(answer) {
//       connection.query(
//         "INSERT INTO Employees SET ?",
//         {
//           First_name:answer.firstName,
//           Last_name: answer.lastName,
//           Role_ID: answer.role_id,
//           Manager_ID: answer.manager_id
//         },
//         function(err) {
//           if (err) throw err;
//           console.log("Success, the new employee: " + answer.firstName + " is eager to start work... NOT!");
//           start();
//         }
//       )
//     })
// };








// viewFunction() {
//   var query = "SELECT * FROM Employees";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].ID + " | " + res[i].First_name + " | " + res[i].Last_name + " | ");
//     }
//     start();
//   });
// }`
