// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const validator = require("validator");
const boxen = require('boxen');
const readmeGen = require("./utils/generateMarkdown.js");

// Your code using inquirer, colors, validator, and readmeGen

// TODO: Create an array of questions for user input
const questions = [
"Enter your username",
"Enter your email",
"Title of the Project?",
"Descrpition:",
"Installation Guidance?",
"Licences?",
"Contributions",
"Tests and Testing",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// Licenses selections
const licenses = [
    "WTFPL",
    "MIT",
    "BSD 3-Clause",
    "CC0",
    "GNU GPL v3",
    "No license"
  ]