// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  console.log(data.license, "line4");
  if ((data.license = "None")) {
    return ``;
  } else {
    return `![license badge](http://img.shiends.io/badge/license-${data.license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let link = data.license;
  if (link === "MIT") {
    return `https://mit-license.org/`;
  }
  if (link === "Apache") {
    return `http://www.apache.org/licenses/LICENSE-2.0`;
  }
  if (link === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  if (link === "BSD") {
    return `https://opensource.org/licenses/alphabetical`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`;
      }
      return '';
    
  //} else if (data.license === "None") {
  //  return "";
 // } else {
 //   return `Please refer to license link for exact text of license for your project. `;
 // }
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
  ${renderLicenseSection(data)}
  ## Contributing
  ${data.contributing} <br/>
  ${data.thirdParty}
  ## Contact
  My name is ${data.username}. My GitHub account is https://github.com/${
    data.github
  }.
  `;
}

module.exports = generateMarkdown;
