// function to generate markdown for README
function generateMarkdown(data) {

  const badges = ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)', '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)']
  let badge = ''


  if (data.license === 'MIT') {
    badge = badges[0]
  } else if (data.license ==='public domain'){
    badge = badges[1]
  } else if (data.license === 'Apache') {
    badge = badges[2]
  }
  return `${badge}
  # ${data.title}
  ${data.description}
  ***
  ## Table of Contents
  [Installation instructions](#instalation-instructions)  
  [Usage description](#usage-description)  
  [License information](#license-information)  
  [Contribution instructions](#contribution-instructions)  
  [Testing procedure](#testing-procedure)  
  [Questions](#questions)  
  ## Instalation instructions
  ${data.instalation}  
  ## Usage description
  ${data.usage}  
  ## License information
  ${data.license}   
  ## Contribution instructions
  ${data.contributing}  
  ## Testing procedure
  ${data.test}  
  ## Questions  
  If you have any questions you can reach me at ${data.email} 

`;
}

module.exports = generateMarkdown;
