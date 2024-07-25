// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const validator = require("validator");
const readmeGen = require("./utils/generateMarkdown.js");

// Your code using inquirer, colors, validator, and readmeGen

// array of questions for user input
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

// function to write README file
function writeToFile(fileName, data) {
    function writeToFile(data) {
        fs.writeFile("./md/README.md", readmeGen.generateMarkdown(data), (err) =>
          err ? console.log(err) : console.log(color.rainbow("Find the generated README.md at ./md")));
      }

}

//function to initialize app
function init() {
    console.log("\n"+ color.america("Please enter an answer for each question. You can find the generated README at ./md/ReadME "));
  collectReadme();
}

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

//   Validate Inputs
function checkEmail(str) {
    if (validator.isEmail(str)) {
      return true;
    }
    return color.bgBrightRed("Please Enter a Vaild Email");
}

function checkEmpty(str) {
    if (!validator.isEmpty(str.trim())) {
      return true;
    }
    return color.bgBrightRed("Please Enter the Required Information");
  }

  