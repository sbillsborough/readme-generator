const inquirer = require('inquirer');
const promptUser = require('./promptUser')
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}



module.exports = generateMarkdown;
