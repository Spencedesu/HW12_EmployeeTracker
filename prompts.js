const prompts = [
  {
    type: "list",
    name: "choices",
    message: "What would you like to find today?",
    choices: ["Show Departments", "Show Employees", "Show Roles", "Add Employee", "Sign off"]
  }
]

module.exports = {prompts}