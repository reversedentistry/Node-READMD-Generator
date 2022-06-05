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
        validate: async (input)  => {
            if (input) {
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
        validate: async (input)  => {
            if (input) {
                return true; 
            } else {
                console.log("Project description is required. Please enter a description"); 
                return false; 
            }
        }
        
    },
    {
        type: "input",
        name: "installation",
        message: "Enter any installation instructions.",
        
    },
    {
        type: "input",
        name: "usage",
        message: "Enter any usage instructions.",
        default: "",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter any contribution guidelines.", 
        default: "",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any tests you'd like to include.", 
        default: "",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please specify a license used.",
        choices: ["Apache", "MIT", "ISC", "GNU", "Mozilla", "Boost", "None"],
        validate: async (checkbox)  => {
            if (checkbox.length == 1) {
                return true; 
            } else {
                console.log("Please choose one option."); 
                return false; 
            }
        }
              
    },
    {
        type: "input", 
        name: "username", 
        message: "Please enter your GitHub username.",
        validate: async (input)  => {
            if (input) {
                return true; 
            } else {
                console.log("Username is required."); 
                return false; 
            }
        }
        
    }, 
    {
        type: "input", 
        name: "link", 
        message: "Please enter the link to your GitHub profile.",
        validate: async (input)  => {
            if (input) {
                return true; 
            } else {
                console.log("Profile link is required."); 
                return false; 
            }
        }
    },    
    {
        type: "input", 
        name: "email", 
        message: "Please enter your email.",
        validate: async (input)  => {
            if (input) {
                return true; 
            } else {
                console.log("Email is required."); 
                return false; 
            }
        }
        
    }, 
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./test-samples/README.md", generate(data), (err) => {
        if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
    } 
})}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile(data)
    })
 }

// Function call to initialize app
init();
