const inquirer = require('inquirer')
// array of questions for user
const questions = ['What is the name of your app?', 'What does the app do?', 'Do you want a table of contents?', 'What are the instalation instructions?', 'What is the usage information?', 'What are the contribution guidelines?', 'What are the instructions for testing?'
]

// // function to write README file
function writeToFile(fileName, data) {
  let markdown = require('./utils/generateMarkdown')
}

// // function to initialize program
function init() {
  inquirer.prompt([
    {type: input,
    name: name,
      message: question[0]}
  ])
  .then(answers => {
    console.log(answers)
  })
  .catch(err) => console.log(err)

}

// // function call to initialize program
init();
