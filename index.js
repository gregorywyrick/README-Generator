// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input (title, github username, email, description, installation, usage, credit, contributors, tests )
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
            console.log('Please enter a breif description!');
            return false;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
