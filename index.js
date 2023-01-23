const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const promptUser = require('./utils/promptUser')



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  promptUser();
}

// function call to initialize program
init();
