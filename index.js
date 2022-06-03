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
        type: "checkbox", 
        name: "license", 
        message: "Please specify a license used.", 
        choices: 


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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
