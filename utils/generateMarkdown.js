// Import necessary modules or functions
const colors = require("colors");

function renderLicenseBadge(license) {
  switch (license) {
    case "WTFPL":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "CC0":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "No license":
      return "";
}}

// function renderLicenseLink(license)
function renderLicenseLink(license) {
  switch (license) {
    case "WTFPL":
      return "[License: WTFPL](http://www.wtfpl.net/about/)";
    case "MIT":
      return "[License: MIT](https://opensource.org/licenses/MIT)";
    case "BSD 3-Clause":
      return "[License: BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)";
    case "CC0":
      return "[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "GNU GPL v3":
      return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
    case "No license":
      return "";

    }}

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

