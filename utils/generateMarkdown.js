// TODO: Create a function that returns a license badge based on which license is passed in
const renderLicenseBadge = (license) => {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Boost Software') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  return '';
}
// If there is no license, return an empty string
const licenseSection = (license) => {
  if (!license) {
    return '';
  }
  return '## License This project uses ${license} license.';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
- [Description](#description)
- [Installation](#intallation)
- [Usage](#usage)
- [Credit](#credit)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credit
${data.credit}

## Contribution
${data.contribution}

## Test
${data.test}
`;
}

module.exports = generateMarkdown;
