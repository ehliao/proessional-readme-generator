// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Provide title of the project",
        name: "title",
    },
    {
        type: "input",
        message: "Provide description of the project",
        name: "description",
    },
    // {
    //     type: "input",
    //     message: "List the Table of Contents",
    //     name: "content",
    // },
    {
        type: "input",
        message: "Provide instructions on how to install the project",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the use for this project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Provide license for the project.",
        name: "license",
    },
    {
        type: "input",
        message: "How do people contribute to this project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "How do you test the project?",
        name: "test",
    },
    {
        type: "input",
        message: "Please provide your GitHub username",
        name: "github",
    },
    {
        type: "input",
        message: "Please provide your e-mail address",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.ReadStream(fileName, data, (err) => {
        if (err)
        throw err;
        console.log ('Success!')
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


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, 
// License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README