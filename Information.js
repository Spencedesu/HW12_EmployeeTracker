const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const server = require("./server")


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Fall2019",
  database: "employee_db",
  multipleStatements: true
});

function queryAllEmployees() {
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err;
    // for (var i = 0; i < res.length; i++) {
      // console.log(res[i].id + "|" + res[i].first_name + "|" + res[i].last_name + "|" + res[i].role_id + "|" + res[i].manager_ID);
      console.log("EMPLOYEE LIST:")
      console.log("\n");
      console.log(res)
      console.log("\n");
      console.log("^^EMPLOYEE LIST:^^")
      start();
    }
    // console.log("------------------")
  )
}


const showDepartments = () => {
  connection.query(
    "SELECT * FROM department", function(err, res) {
      if (err) throw err;
      // for (var i = 0; i < res.length; i++) {
      //   console.log(res[i] + "|")
      // }
      console.log("DEPARTMENTS:");
      console.log("\n");
      console.log(res);
      console.log("\n");
      console.log("^^DEPARTMENTS:^^");
      start();
    }
  )
}
const showRoles = () => {
  connection.query(
    "SELECT * FROM role", function(err ,res){
      if (err) throw (err);
      console.log("ROLES:");
      console.log("\n");
      console.log(res);
      console.log("^^ROLES:^^");
      start();
    }
  )
}
const exit = () => {
  console.log("See ya later, space cowboy...");
  console.log("press CTRL + c to return to directory");
  connection.end();
}

module.exports = {
  queryAllEmployees,
  showDepartments,
  showRoles,
  exit
}