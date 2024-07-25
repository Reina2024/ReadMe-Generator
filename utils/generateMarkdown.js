// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


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
}
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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
}
  }
// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  fullLicense = `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  return fullLicense;
  }

}

//function to generate markdown for README
function generateMarkdown(data) {
  const {username, email, title, description, installation, usage, license, contributing, tests} = data;

  return renderTitleSection(title, license) + 
  insertTableOfContent(title) +
  renderCommonSection("Description" , description) + 
  renderCommonSection("Installation" , installation) + 
  renderCommonSection("Usage" , usage) +
  renderCommonSection("Contributing" , contributing) + 
  renderCommonSection("Tests" , tests) +
  renderLicenseSection(license) + 
  renderQuestionsSection(username, email);
}

// Table of Contents
function insertTableOfContent(title) {
  return "\n\n## Table of content" + "\n- " + title + 
  "\n  - [Description](#Description)" +
  "\n  - [Installation](#Installation)" +
  "\n  - [Usage](#Usage)" +
  "\n  - [Contributing](#Contributing)" +
  "\n  - [Tests](#Tests)" +
  "\n  - [License](#License)";
}

// render links to github, email,title ect

function renderGitHubLink(username) {
  return "[" + username + "'s GitHub profile.](https://github.com/" + username + ")";
}


function renderEmailLink(email) {
  return "[Contact me at " + email + "](mailto:" + email + ")";
}


function renderQuestionsSection (username, email) {
  return "\n\n## Questions\n" + renderGitHubLink(username) + "\n\n" + renderEmailLink(email);
}


function renderTitleSection (title, license) {
  return "# " + title + "\n" + renderLicenseBadge(license);
}


function renderCommonSection(secTitle, content) {
  return "\n\n## " + secTitle + "\n" + content;
}

module.exports = {generateMarkdown};
