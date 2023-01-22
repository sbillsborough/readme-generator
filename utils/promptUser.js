const inquirer = require('inquirer');
// function with array of questions for the user
function promptUser() {
  inquirer.prompt([
    {
      type: 'number',
      name: 'num1',
      message: 'Enter your first number.'
    }
  ]);
}

module.exports = promptUser;
