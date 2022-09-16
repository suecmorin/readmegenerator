// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  if (license === null) {
    return ``
  } else if (license = "none") {
    return ``
  } else return `![license badge](http://img.shiends.io/badge/license-${license}-blue.svg)`;  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license)
    {
      case "null":
      return ``
      case "none":
        return ``
      case "MIT":
        return `https://mit-license.org/`
      case "Apache":
        return `http://www.apache.org/licenses/LICENSE-2.0`
      case "GPL":
        return `https://www.gnu.org/licenses/gpl-3.0.en.html`
      case "BSD":
        return `https://opensource.org/licenses/alphabetical`
        ;
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return `
  } else if (license === 'none') {
    return `
  } else return `Please refer to license link for exact text of license for your project. `
  ;
}

  
function generateMarkdown(data) {

 return `
  
  ##Description
  {data.description}

  ##Table of Contents
  [Description]  (#description)
  [Installation] (#installation)
  [Usage]        (#usage)
  [License] (#license)
  [Contributing] (#contributing)
  [Contact] (#contact)

  ##Description
  {data.description}

  ##Installation
  {data.installation}
  

  ##Usage
  {data.usage}

  ##License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  


  

  ##Contributing

  {data.contributing} <br/>
  {data.thirdParty}

  ##Contact
  My name is {data.username}. My GitHub account is https://github.com/{github}.

  ` 
  ;
 }


module.exports = generateMarkdown;



