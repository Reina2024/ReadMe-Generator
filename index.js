const inquirer = require("inquirer");
const colors = require("colors");
const validator = require("validator");
const fs = require('fs');
const readmeGen = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  "Enter your username",
  "Enter your email",
  "Title of the Project?",
  "Description:",
  "Installation Guidance?",
  "Licenses?",
  "Contributions:",
  "Tests and Testing:",
  "Usage",
];

// Function to write README file
function writeToFile(data) {
  fs.writeFile("./ReadMe.md", readmeGen.generateMarkdown(data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(colors.brightBlue("Find the generated README.md at ./md"));
    }
  });
}

// Function to collect ReadMe Info
function collectReadme() {
  inquirer.prompt([
    {
      type: 'input',
      message: colors.zebra(questions[0]),
      name: "username",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: colors.zebra(questions[1]),
      name: "email",
      validate: checkEmail,
    },
    {
      type: 'input',
      message: colors.zebra(questions[2]),
      name: "title",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: colors.zebra(questions[3]),
      name: "description",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: colors.zebra(questions[4]),
      name: "installation",
      validate: checkEmpty,
    },
    
    {
        type: "list",
        message: colors.zebra(questions[5]),
        name: "license",
        validate: checkEmpty,
        choices: [
          "none",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "BSD 2-Clause 'Simplified' License",
          "BSD 3-Clause 'New' or 'Revised' License",
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU General Public License v2.0",
          "GNU Lesser General Public License v2.1",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ]},
    {
      type: 'input',
      message: colors.zebra(questions[6]),
      name: "contributing",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: colors.zebra(questions[7]),
      name: "tests",
      validate: checkEmpty,
    },
    {
        type: 'input',
        message: colors.zebra(questions[8]),
        name: "usage",
        validate: checkEmpty,
      },
  ])
  .then((readme) => {
    writeToFile(readme);
  })
  .catch((error) => {
    console.log(error);
  });
}

// Function to initialize app
function init() {
  console.log("\n"+ colors.blue("Please enter an answer for each question. You can find the generated README at ./md/ReadME "));
  collectReadme();
}

// Validate Inputs
function checkEmail(str) {
  if (validator.isEmail(str)) {
    return true;
  }
  return colors.bgBrightRed("Please Enter a Valid Email");
}

function checkEmpty(str) {
  if (!validator.isEmpty(str.trim())) {
    return true;
  }
  return colors.bgBrightRed("Please Enter the Required Information");
}

// Function call to initialize app
init();
