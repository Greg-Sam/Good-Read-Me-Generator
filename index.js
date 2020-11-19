const inquirer = require('inquirer')
const fs = require('fs')

let generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [{ type: 'input', name: 'title', message: 'What is the name of your project?' }, { type: 'input', name: 'description', message:'Please write a description of your project'}, {type: 'input', name: 'instalation', message: 'Please provide instalation instructions'}, {type: 'input', name: 'usage', message: 'Please write usage information'}, {type: 'list', name: 'license', message: 'Choose a license for your application', choices: ['public domain', 'Apache', 'MIT']}, {type: 'input', name: 'contributing', message: 'Please provide any contribution instructions'}, {type: 'input', name: 'test', message: 'What are the testing procedures'}, {type: 'input', name: 'github', message: 'What is your GitHub user name?'}, {type: 'input', name: 'email', message: 'What is your email address'}
]

// // function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) { console.log(err) }})
}
// IDEA - writeFile with badge only first, then appendFile with everything from generateMarkdown

// // function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    writeToFile('test.md', generateMarkdown(answers))
  })
  .catch(err => console.log(err))

}

// // function call to initialize program
init();
