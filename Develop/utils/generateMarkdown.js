function renderLicenseBadge(license) {
  if (license !== "No license") {
    return "[![Badge](https://img.shields.io/badge/License-" + license + "-red.svg)](https://opensource.org/licenses/" + license + ")";
  }
  else {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license !== "No license") {
    return "This project is licensed under the " + license + " license."
  }
  else {
    return "";
  }
}

function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  URL to the deployed application: ${data.url}

  ## Table of Contents

  -[Installation](#installation)<br>
  -[Usage](#usage)<br>
  -[Credits](#credits)<br>
  -[Tests](#tests)<br>
  -[License](#license)<br>
  -[Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Tests

  ${data.tests}

  ## Credits

  Other Contributors: ${data.credits}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  Message me on GitHub [here](github.com/${data.github})
  <br>
  Email me at ${data.email}


`;
}

module.exports = generateMarkdown;
