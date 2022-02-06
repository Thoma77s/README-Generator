// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const util = require("util");
const generateReadme = require("./utils/generateReadme");
//const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of you project.'
    },
    {
      type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide the usage information'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide the contribution guidelines.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Plese provide any test instructions'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    }
    
  ])
};

// TODO: Create a function to initialize app
async function init() {
  try {
      // Ask user questions and generate responses
      const answers = await promptQuestions();
      const generateContent = generateReadme(answers);
      // Write new README.md to dist directory
      await writeFileAsync('./dist/README.md', generateContent);
      console.log('Successfully wrote to README.md');
  }   catch(err) {
      console.log(err);
  }
}

// Function call to initialize app
init ();


