const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a clear and concise description of your project including the following factors: The motivation and reason for creating this project, the problem it solves, and what you learned from it.',
    },
    {
        type: 'input',
        name: 'url',
        message: 'Paste the URL to your deployed application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write a description of each step necessary to install your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples that describe how to use the product.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license you would like to use.',
        choices: ['MIT', 'GPL-2.0', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'BSD-2-Clause', 'LGPL-3.0', 'No license'],
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any other contributors, if any, separated by commas.',
    },
    {
        type: 'name',
        name: 'tests',
        message: 'Explain any necessary test directions.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username for contact purposes?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email for contact purposes?',
    }
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Your README has been created! Open README.md to see how it looks!');
        }
    });
};

const init = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile("./README.md", answers);
        })
        .catch((error) => {
            console.log(error);
        });
};

// Function call to initialize app
init();
