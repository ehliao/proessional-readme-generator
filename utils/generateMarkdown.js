// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = '';
  for (i=0; i < licenseType.length; i++) {
  if(licenseType[i] === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType[i] === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else if (licenseType[i] === 'Apache') {
    yourLicense = `![Apache license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (licenseType[i] === 'BSD') {
    yourLicense = `![BSD license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  } else {
    yourLicense = ""
  }}
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Wasn't sure which license links to utilize, so will meet with instructor or tutor for clarification
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Wasn't sure which license sections to utilize, so will meet with instructor or tutor for clarification

function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  <br/>

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [GitHub](#github)
  * [Email](#email)
  
  <br/>

  # Description
  *This section describes what this project is*
  ## ${data.description}

  <br/>

  # Installation
  *This section provides installation instructions*
  ## ${data.installation}

  <br/>

  # Usage
  *This section provides the usage purpose of the project*
  ## ${data.usage}

  <br/>

  # License
  *This section provides licensing information*
  ## ${renderLicenseBadge(data.license)}


  <br/>

  # Contribution
  *This sections lists the number or names of the people who contributed to the project*
  ## ${data.contribution}

  <br/>

  # Test
  *This section provides instructions on how to test the project*
  ## ${data.test}

  <br/>

  # GitHub Username
  ## (https://github.com/${data.github})

  <br/>

  # E-mail Address
  ## ${data.email}

`;
}

module.exports = generateMarkdown;
