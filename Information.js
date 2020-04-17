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
      console.log("\n");
      console.log(res)
      console.log("\n");
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
      console.log("\n");
      console.log(res);
      console.log("\n");
      start();
    }
  )
}
const showRoles = () => {
  connection.query(
    "SELECT * FROM role", function(err ,res){
      if (err) throw (err);
      console.log(res);
      start();
    }
  )
}

module.exports = {
  queryAllEmployees,
  showDepartments,
  showRoles
}