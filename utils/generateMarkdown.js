// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  console.log(data.license, "line4");
 // if ((data.license = "None")) {
//    return ``;
 // } else {
    return `![license badge](http://img.shields.io/badge/license-${data.license}-blue.svg)`;
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let link = data.license;
  if (link === "MIT") {
    return `https://mit-license.org/  Please refer to license link for exact text of license for your project.`;
  }
  if (link === "Apache") {
    return `http://www.apache.org/licenses/LICENSE-2.0  Please refer to license link for exact text of license for your project.`;
  }
  if (link === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html  Please refer to license link for exact text of license for your project.`;
  }
  if (link === "BSD") {
    return `https://opensource.org/licenses/alphabetical  Please refer to license link for exact text of license for your project.`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  
}

function generateMarkdown(data) {
  return `# ${data.projectName}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Contact](#contact)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseBadge(data)}
    ${renderLicenseLink(data)}
  ## Contributing
  ${data.contributing}
    ${data.thirdParty}
  ## Contact
  My name is ${data.username}. My GitHub account is https://github.com/${data.github}.
  `;
}

module.exports = generateMarkdown;
