// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project title."
    },
    {
        type: "input",
        name: "desc",
        message: "Enter a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter any installation instructions."

    },
    {
        type: "input",
        name: "usage",
        message: "Enter any usage instructions."
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter any contribution guidelines."
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any tests you'd like to include."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please specify a license used.",
        choices: ["Apache", "MIT", "ISC", "GNU", "Mozilla", "Boost", "None"],
    },
    {
        type: "input", 
        name: "username", 
        message: "Please enter your GitHub username."
    }, 
    {
        type: "input", 
        name: "link", 
        message: "Please enter the link to your GitHub profile."
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Please enter your email."
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
