// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "username",
    message: "Please enter your name",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub account",
  },
  {
    type: "input",
    name: "projectName",
    message: "Project Name:",
  },
  {
    type: "input",
    name: "description",
    message: "Project Description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Collaborators:",
  },
  {
    type: "input",
    name: "thirdParty",
    message: "Third party resources or tutorials which were helpful:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license did you use for this application?",
    choices: [ 'None', 'MIT', 'Apache', 'GPL', 'BSD'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data))
    console.log(data)
  })
}

// Function call to initialize app
init();
