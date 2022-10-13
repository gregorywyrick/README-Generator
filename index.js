// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input (title, github username, email, description, installation, usage, credit, licenses, contributors, tests )
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project this README will be for?',
        validate: (titleResponse) => {
            if (titleResponse) {
                return true;
            }
            console.log('Please enter a title for your project, it can be whatever you want!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Whats your GitHub username?',
        validate: (userResponse) => {
            if (userResponse) {
                return true;
            }
            console.log('Please enter your valid GitHub username');
            return false;
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
        validate: (emailResponse) => {
            if (emailResponse) {
                return true;
            }
            console.log('Please enter the email address you would like to appear on the README');
            return false;
        }
    },
    {
        type: 'input',
        name: 'Desciption',
        message: 'Please describe your project following normal SOP (what, why, how)?',
        validate: (descriptResponse) => {
            if (descriptResponse) {
                return true;
            }
            console.log('Please enter a breif description of your project');
            return false;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will the user go about installing the project/application?',
        validate: (installResponse) => {
            if (installResponse) {
                return true;
            }
            console.log('Please describe how to install the project, if n/a please type n/a');
            return false;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Once installed, how will the user use the project? Please decribe the usage process.',
        validate: (usageResponse) => {
            if (usageResponse) {
                return true;
            }
            console.log('We dont want them staring at a blank screen!! How will the user use your project?');
            return false;
        }
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Who can we give credit to for this project?',
        validate: (creditResponse) => {
            if (creditResponse) {
                return true;
            }
            console.log('Please enter whom to give credit to. If this was a solo project, please enter your name.');
            return false;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is being used for this project? If none are used, please choose no license.',
        choices: ['MIT', 'Boost Software', 'Apache', 'no license'],

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please explain how others can contribute to this project.',
        validate: (contributeResponse) => {
            if (contributeResponse) {
                return true;
            }
            console.log('Please enter a title for your project, it can be whatever you want!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How will this project be tested?',
        validate: (testResponse) => {
            if (testResponse) {
                return true;
            }
            console.log('Please provide instructions on how to test this project.');
            return false;
        }
    }
    
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = (data) =>
    new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('You have completed. Your README file has been generated!'),
            })
        })
    })

// TODO: Create a function to initialize app
const init = () => inquirer.prompt(questions)

// Function call to initialize app
init()
    .then((readmeData) => generateMarkdown(readmeData))
    .then((dataReceived) => writeToFile(dataReceived))
    .catch((err) => console.log(err));

