const inquirer = require('inquirer')
const fs = require('fs')
let generateMarkdown = require('./utils/generateMarkdown')
// array of questions for user
const questions = [{ type: 'input', name: 'name', message: 'What is the name of your app?' }, { type: 'input', name: 'description', message:'What does the app do?'}
]

// // function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) { console.log(err) }})
}

// // function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
    const test = generateMarkdown(answers)
    console.log(test)
    writeToFile('test.md', generateMarkdown(answers))
  })
  .catch(err => console.log(err))

}

// // function call to initialize program
init();
