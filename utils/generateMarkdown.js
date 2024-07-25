// Import necessary modules or functions
const colors = require("colors");

// Function to Return a badge
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch (license) {
    case "Apache License 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "GNU General Public License v3.0":
      licenseBadge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "MIT License":
      licenseBadge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;
    case "Boost Software License 1.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge =
        "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
      break;
    case "Eclipse Public License 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge =
        "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
      break;
    case "GNU General Public License v2.0":
      licenseBadge =
        "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge =
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseBadge =
        "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
      break;
    case "The Unlicense":
      licenseBadge =
        "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      break;
    default:
      console.log("Error: Unknown license");
      break;
  }

  return licenseBadge;
}

// Function to Return a license link
function renderLicenseLink(license) {
  let licenseLink = "";

  switch (license) {
    case "Apache License 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GNU General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Eclipse Public License 2.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU Affero General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case "GNU General Public License v2.0":
      licenseLink =
        "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "The Unlicense":
      licenseLink = "http://unlicense.org/";
      break;
    default:
      console.log("Error: Unknown license");
      break;
  }

  return licenseLink;
}

// Function to Render License Section
function renderLicenseSection(license) {
  if (license === "none") {
    return "\n\n## License\nNo license specified.";
  } else {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return `\n\n## License\n${licenseBadge} [License Link](${licenseLink})`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { username, email, title, description, installation, usage, license, contributing, tests } = data;

  return (
    renderTitleSection(title, license) +
    insertTableOfContents(title) +
    renderCommonSection("Description", description) +
    renderCommonSection("Installation", installation) +
    renderCommonSection("Usage", usage) +
    renderCommonSection("Contributing", contributing) +
    renderCommonSection("Tests", tests) +
    renderLicenseSection(license) +
    renderQuestionsSection(username, email)
  );
}

// Function to insert table of contents
function insertTableOfContents(title) {
  return `
## Table of Contents

- [${title}](#${title})
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
`;
}

// Function to render links to GitHub, email, title, etc.
function renderGitHubLink(username) {
  return `[${username}'s GitHub Profile](https://github.com/${username})`;
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
${renderLicenseBadge(license)}
`;
}

// Function to render common sections (e.g., Description, Installation, etc.)
function renderCommonSection(sectionTitle, content) {
  return `
## ${sectionTitle}
${content}
`;
}

module.exports = {
  generateMarkdown,
};
