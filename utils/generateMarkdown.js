// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description} 

  ## Table of Contents:
    1. [Description](#description) 
    2. [Installation](#Installation)
    3. [Usage](#Usage)  
    4. [License](#License)
    5. [Contributing](#Contributing)
    6. [Tests](#Tests)
    7. [Contact](#Contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge(data)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Contact
${data.questions}`
}


module.exports = generateMarkdown;
