// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Provide title of the project:",
        name: "title",
        validate: (value)=> {if (value){return true} else {return "Please enter title to continue"}}
    },
    {
        type: "input",
        message: "Provide description of the project:",
        name: "description",
        validate: (value)=> {if (value){return true} else {return "Please enter description to continue"}}

    },
    {
        type: "input",
        message: "Provide instructions on how to install the project:",
        name: "installation",
        validate: (value)=> {if (value){return true} else {return "Please enter installation instructions to continue"}}

    },
    {
        type: "input",
        message: "What is the use for this project?",
        name: "usage",
        validate: (value)=> {if (value){return true} else {return "Please enter the usage to continue"}}

    },
    {
        type: "input",
        message: "How do you test the project?",
        name: "test",
        validate: (value)=> {if (value){return true} else {return "Please enter testing instructions to continue"}}

    },
    {
        type: "checkbox",
        message: "Select a license for the project:",
        name: "license",
        choices: ["MIT", "GPL", "Apache", "BSD"],
        validate: (value)=> {if (value){return true} else {return "Please enter licensing information to continue"}}

    },
    {
        type: "input",
        message: "Please provide either the number or names of people who contributed to this project:",
        name: "contribution",
        validate: (value)=> {if (value){return true} else {return "Please enter number of contribution to continue"}}

    },
    {
        type: "input",
        message: "Please provide your GitHub username:",
        name: "github",
        validate: (value)=> {if (value){return true} else {return "Please enter GitHub username to continue"}}
    },
    {
        type: "input",
        message: "Please provide your e-mail address:",
        name: "email",
        validate: (value)=> {if (value){return true} else {return "Please enter email address to continue"}}
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error)
        throw error;
        console.log ('Complete! Your information has been added!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(input) {
        console.log(input)
        writeToFile("README.md", generateMarkdown(input));
    });
};

// Function call to initialize app
init();


