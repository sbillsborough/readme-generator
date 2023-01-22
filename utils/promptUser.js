const inquirer = require('inquirer');
// function with array of questions for the user
function promptUser() {
  inquirer.prompt([
    {
      type: 'string',
      name: 'title',
      message: 'Enter the project\'s title:'
    },
    {
      type: 'string',
      name: 'description',
      message: 'Enter the project\'s description:'
    },
    {
      type: 'string',
      name: 'contents-table',
      message: 'Enter the project\'s contents:'
    },
    {
      type: 'string',
      name: 'installation',
      message: 'Enter the project\'s installation instructions:'
    },
    {
      type: 'string',
      name: 'usage',
      message: 'Enter a description of how to use your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose the project\'s license type:',
      choices: ['MIT', 'None']
    },
    {
      type: 'string',
      name: 'contributing',
      message: 'Enter the project\'s contributers:'
    },
    {
      type: 'string',
      name: 'tests',
      message: 'Enter any tests for your project:'
    },
    {
      type: 'string',
      name: 'questions',
      message: 'Enter your contact information for any questions about the project:'
    },
  ]);
}

module.exports = promptUser;
