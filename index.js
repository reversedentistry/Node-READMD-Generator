// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project title.",
        validate: titleInput  => {
            if (titleInput) {
                return true; 
            } else {
                console.log("Project title is required. Please enter a title."); 
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "desc",
        message: "Enter a brief description of your project.",
        validate: descInput => {
            if (descInput) {
                return true; 
            } else {
                console.log("Project description is required. Please enter a description.");
                return false; 
            }
        }
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
        validate: licenseChoice => {
            if (licenseChoice.length = 1) {
                return true;
            } else {
                console.log("You must choose a license option.");
                return false;
            }
        }
    },
    {
        type: "input", 
        name: "username", 
        message: "Please enter your GitHub username.",
        validate: usernameInput => {
            if (usernameInput) {
                return true; 
            } else {
                console.log("Username is required.");
                return false; 
            }
    }}, 
    {
        type: "input", 
        name: "link", 
        message: "Please enter the link to your GitHub profile.",
        validate: linkInput => {
            if (linkInput) {
                return true; 
            } else {
                console.log("GitHub link is required.");
                return false; 
            }
    }}, 
    {
        type: "input", 
        name: "email", 
        message: "Please enter your email.",
        validate: emailInput => {
            if (emailInput) {
                return true; 
            } else {
                console.log("Email is required.");
                return false; 
            }
    }}, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
