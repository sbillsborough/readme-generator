const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// function with array of questions for the user
function promptUser() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project\'s title:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the project\'s description:'
    },
    {
      type: 'input',
      name: 'contents-table',
      message: 'Enter the project\'s contents:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the project\'s installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter a description of how to use your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose the project\'s license type:',
      choices: ['MIT', 'GNU General Public License 2.0', 'Apache License 2.0', 'GNU General Public License 3.0']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the project\'s contributers:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter any tests for your project:'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Enter your contact information for any questions about the project:'
    },
  ])
  .then((res) => {
    return fs.writeFileSync(path.join(process.cwd(), 'README.md'), generateMarkdown(response))
  });
}

module.exports = promptUser;
