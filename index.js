//link inquirer node module
const inquirer = require('inquirer');
//link file system node module for writeFile function
const fs = require('fs');
//link all class JavaScript files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//link to html template js file
const generateHTML = require('./src/html-layout');

//array for manager data
let manager = [];
//array for engineer data
let engineer = [];
//array for intern data
let intern = [];
//declare a parent array to house user input for manaer, engineer, and intern class data
let employeeArray = {manager, engineer, intern};

//prompts user for employee data
async function questions() {
    //call inquirer module
    const { employee, id, email, role } = await inquirer
        //start an inquirer prompt to get employee data
        .prompt([
            //ask base questions
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'text',
                name: 'employee',
                message: "What is the Employee's name?"
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the employee's ID number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the employee's email?"
            }
        ]);
    if (role === "Manager") {
        return inquirer
            .prompt([{
                type: 'text',
                name: 'office',
                message: "What is the Manager's office number?"
            },
            {
                type: 'confirm',
                name: 'anotherEntry',
                message: "What you like to add another employee?",
                default: false
            }])
            //then push the content from the manager array to a new Manager class instance filling in the respective methods
            .then(({ office, anotherEntry }) => {
                manager.push(new Manager(employee, id, email, office));

                if (anotherEntry) {
                    return questions();
                }
            });
    }

    //Then if the employee is an engineer, ask these additional questions
    else if (role === "Engineer") {
        return inquirer
            .prompt([{
                type: 'text',
                name: 'github',
                message: "What is the Engineer's Github username?"
            },
            {
                type: 'confirm',
                name: 'anotherEntry',
                message: "What you like to add another employee?",
                default: false
            }])
            //then push the content from the engineer array to a new Engineer class instance filling in the respective methods
            .then(({ github, anotherEntry: anotherEntry_1 }) => {
                engineer.push(new Engineer(employee, id, email, github));

                if (anotherEntry_1) {
                    return questions();
                }
            });
    }

    //Then if the employee is an intern, ask these additional questions
    else if (role === 'Intern') {
        return inquirer
            .prompt([{
                type: 'text',
                name: 'school',
                message: "What is the Intern's school?"
            },
            {
                type: 'confirm',
                name: 'anotherEntry',
                message: "What you like to add another employee?",
                default: false
            }])
            //then push the content from the intern array to a new Intern class instance filling in the respective methods
            .then(({ school, anotherEntry: anotherEntry_2 }) => {
                intern.push(new Intern(employee, id, email, school));

                if (anotherEntry_2) {
                    return questions();
                }
            });
    }
};

//initialize app by calling the questions function
questions()
    //then take the data from questions function and populate data into html template
    .then(data => {
        return generateHTML(employeeArray)
    })
    //then write the content of the html-layout.js file to a new HTML file in the dist folder
    .then(fileContent => {
            return new Promise((resolve, reject) => {
                fs.writeFile('./dist/index.html', fileContent, err => {
                    //if there is an error return err
                    if (err) {
                        reject(err);

                        return;
                    }
                    //if there are no errors resolve and notify the user that their html file has been created
                    resolve({
                        ok: true,
                        message: console.log('File created. Check dist folder for html file.'),
                    })
                })
            })
        }
    ) 