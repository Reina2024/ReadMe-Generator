// Import necessary modules or functions
const colors = require("colors");
// Global Varibles
let licenseBadge = "";
let licenseLink = "";
let fullLicense="";
// Function to Return a bagde
function renderLicenseBadge(license) {
  switch (license) {
    case "none":

      break;
    case "Apache License 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
 
      return licenseBadge;
    case "GNU General Public License v3.0":
      licenseBadge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
 
      return licenseBadge;
    case "MIT License":
      licenseBadge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
 
      return licenseBadge;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
 
      return licenseBadge;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
 
      return licenseBadge;
    case "Boost Software License 1.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
 
      return licenseBadge;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge =
        "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
 
      return licenseBadge;
    case "Eclipse Public License 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
 
      return licenseBadge;
    case "GNU Affero General Public License v3.0":
      licenseBadge =
        "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
 
      return licenseBadge;
    case "GNU General Public License v2.0":
      licenseBadge =
        "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
 
      return licenseBadge;
    case "Mozilla Public License 2.0":
      licenseBadge =
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
 
      return licenseBadge;
    case "GNU Lesser General Public License v2.1":
      licenseBadge =
        "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
 
      return licenseBadge;
    case "The Unlicense":
      licenseBadge =
        "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
 
      return licenseBadge;
    default:
      console.log("Error");
      break;
  }
  console.log(licenseBadge + licenseLink);
}

// function renderLicenseLink(license)
function renderLicenseLink(license) {
 
  switch (license) {
    case "none":

      break;
    case "Apache License 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";

      return licenseLink;
    case "GNU General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
 
      return licenseLink;
    case "MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
 
      return licenseLink;
    case "BSD 2-Clause 'Simplified' License":
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
 
      return licenseLink;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
 
      return licenseLink;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
 
      return licenseLink;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
 
      return licenseLink;
    case "Eclipse Public License 2.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
 
      return licenseLink;
    case "GNU Affero General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
 
      return licenseLink;
    case "GNU General Public License v2.0":
      licenseLink =
        "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
 
      return licenseLink;
    case "GNU Lesser General Public License v2.1":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
 

      return licenseLink;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
 
      return licenseLink;

    case "The Unlicense":
      licenseLink = "http://unlicense.org/";
 
      return licenseLink;

    default:
      //if theres an error it logs that
      console.log("Error");
      break;
  }
}

// function renderLicenseSection(license)
// choice of license
function renderLicenseSection(license) {
  if (license === "No license") return "\n\n## License\nNo license so far. Contact me for any questions.";
  return "\n\n## License\nThis project adopts " + license + " license practices. Check the website for license details: " + renderLicenseLink(license);  
}


// Function to generate markdown for README
function generateMarkdown(data) {
  const { username, email, title, description, installation, usage, license, contributing, tests } = data;

  return (
    renderTitleSection(title, license) +
    insertTableOfContent(title) +
    renderCommonSection("Description", description) +
    renderCommonSection("Installation", installation) +
    renderCommonSection("Usage", usage) +
    renderCommonSection("Contributing", contributing) +
    renderCommonSection("Tests", tests) +
    renderLicenseSection(license) +
    renderQuestionsSection(username, email)
  );
}

// Table of Contents
function insertTableOfContent(title) {
  return `
## Table of Contents

- [${title}](#${title})
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#Questions)
`;
}

// Function to render links to GitHub, email, title, etc.
function renderGitHubLink(username) {
  return `[${username}'s GitHub profile.](https://github.com/${username})`;
}

function renderEmailLink(email) {
  return `[Contact me at ${email}](mailto:${email})`;
}

// Function to render questions section
function renderQuestionsSection(username, email) {
  return `
## Questions

${renderGitHubLink(username)}
  
${renderEmailLink(email)}
`;
}

// Function to render title section
function renderTitleSection(title, license) {
  return `
# ${title}
${renderLicenseSection(license)}
`;
}

// Function to render common sections (e.g., Description, Installation, etc.)
function renderCommonSection(secTitle, content) {
  return `
## ${secTitle}
${content}
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseSection, // Export other functions if needed
};

