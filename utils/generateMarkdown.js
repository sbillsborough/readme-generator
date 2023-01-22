// function to generate markdown for README
function badge(data) {
  const licenseType = data.license[0];
  let licenseString = ''
  if (licenseType === 'MIT') {
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (licenseType === 'GNU General Public License 2.0') {
    licenseString = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  };
  if (licenseType === 'Apache License 2.0') {
     licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
  if (licenseType === 'GNU General Public License 3.0') {
      licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };
  return licenseString
  };

function generateMarkdown(data) {
  return `# ${data.title}

## Description

> ${data.description} 

## Table of Contents:

- [Description](#description) 
- [Installation](#installation)
- [Usage](#usage)  
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${badge(data)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Contact
${data.questions}
`
}


module.exports = generateMarkdown;
