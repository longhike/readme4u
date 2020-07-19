// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

    * [Description](#description)
    * [Installation Information](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Testing](#testing)
    * [Questions](#questions) 
  
  ## Description

  ${data.description}

  ## Installation

  You'll need to run the following command to install relevant packages: 
  
  ------

    ${data.install}

  ------

  ## Usage

  Additional information about this application's use: ${data.usage}

  ## License

  This application operates under a ${data.license} license. 

  ## Contributing

  You can go to the Github repo for this here: https://github.com/${data.github}/${data.repo}

  ## Testing

  To test the application, run the following command in the terminal:

  ------

    ${data.test}

  ------

  ## Questions

  For any questions, you can reach me at ${data.email}.

  `;
}

module.exports = generateMarkdown;
