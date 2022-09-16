// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Mkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your name',
  },
  {
  type: 'input',
  name: 'github',
  message: 'Please enter your GitHub account',
},
{
    type: 'input',
    name: 'projectName',
    message: 'Project Name:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project Description:',
   
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation:',
    
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage:',
    
  },
{
type: 'input',
name: 'contributing',
message: 'Collaborators:',
},
{
type: 'input',
name: 'thirdParty',
message: 'Third party resources or tutorials which were helpful:',
},
{
type: 'checkbox',
name: 'license',
choices: 
[
{
name: 'MIT',
},
{
name: 'Apache',
},
{
name: 'GPL',
},
{
name: 'BSD',
},
{
name: 'None',
}
],
}
];
function promptUser(){
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));

   });
  }


// TODO: Create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(fileName, data, function(err){
    if (err){
        console.error(err);
    }
});
}

// TODO: Create a function to initialize app
  async function init() {
    console.log("Welcome to the README Generator!")
    try {
        const answers = await promptUser();
        const readMe = generateMarkdown(data);
        writeToFile("GeneratedREADME.md", readMe);
        console.log("**README file successfully created!**");
        
    }catch(err) {
        console.log(err);
        
    }


// Function call to initialize app
init();
    promptUser();
    renderLicenseBadge();
    renderLicenseLink();
    renderLicenseSection();
    writeToFile();
  }
    
