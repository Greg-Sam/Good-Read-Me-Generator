


// function to generate markdown for README
function generateMarkdown(data) {
 
  return `${badge}
  # ${data.title}
  ${data.description}
  ***
  ## Table of Contents
  Installation  
  Usage  
  License  
  Contributing  
  Tests  
  Questions  
  ## Instalation instructions
  ${data.instalation}  
  ## Usage description
  ${data.usage}  
  ## License information
  ${data.license}   
  ## Contribution instructions
  ${data.contributing}  
  ## Testing procedure
  ${data.testing}  
  ## Questions  
  If you have any questions you can reach me at ${data.email} 

`;
}

module.exports = generateMarkdown;
