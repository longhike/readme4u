// file system dependancy
const fs = require("fs")

// inquirer dependancy
const inquirer = require("inquirer")

// const holding the generateMarkdown function
const generateMarkdown = require("./utils/generateMarkdown.js")
    console.log(generateMarkdown);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project's title: "
    },
    {
        type: "input",
        name: "repo",
        message: "Enter your project's Github repo name: "
    },
    {
        type: "input",
        name: "description",
        message: "Enter a project description: "
    },
    {
        type: "input",
        name: "install",
        message: "Enter the dependancy installation command: "
    },
    {
        type: "input",
        name: "test",
        message: "Enter the test command: "
    },
    {
        type: "input",
        name: "license",
        message: "Under what license is your project covered?"
    },
    {
        type: "input",
        name: "usage",
        message: "What should the user know about this application's use?"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your e-mail address: "
    }

];

// function to write README file
// function writeToFile(fileName, data) {
//     fs.appendFile(fileName, data)
// }

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((item) => {
        console.log(item);
        console.log("Generating README...");
        fs.writeFileSync("README.md", generateMarkdown({...item}))
    })}

// function call to initialize program
init();
