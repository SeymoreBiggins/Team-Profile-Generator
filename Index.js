const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let teamArray = [];

function openPrompt() {
  inquirer.prompt([
    {
      message: "Welcome to the Team Profile Generator. Begin by entering your team name:",
      name: "teamname"
    }
  ]) 
  .then(data => {
    const teamName = data.teamname;
    teamArray.push(teamName);
    managerPrompt();
  })
}

function managerPrompt() {
  inquirer.prompt([
    {
      message: "What is your team manager's name? (Required)",
      name: "name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          return "Please enter your manager's name";
        }
      }
    },
    {
      message: "What is your team manager's ID number?",
      name: "id",
      validate: empID => {
        const valid = /^[0-9]+$/.test(empId);

        if (valid) {
            return true;
        } else {
            return "Please enter a number";
        }
      }
    },
    {
      message: "What is your team manager's email address? (Required)",
      name: "email",
      validate: email => {
        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);  // thank you https://www.w3resource.com/javascript/form/email-validation.php

        if (valid) {
          return true;
        } else {
          return "Please enter a valid email address";
        }
      }
    },
    {
      type: "number",
      message: "What is your team manager's office number?",
      name: "office"
    },
  ])

  .then(data => {
    const name = data.name;
    const id = data.id;
    const email = data.email;
    const office = data.officeNumber;
    const teamMember = new Manager(name, id, email, office);
    teamArray.push(teamMember);
    addTeamMembers();
  });
}

function addTeamMembers(){
  inquirer.prompt([
    {
      type: "list",
      message: "Would you like to add additional team members?",
      choices: ["Engineer","Intern","No additional teammates"],
      name: "addMember"
    }
  ])
}

// Run Program
openPrompt();

/*

 ██████╗ ██████╗ ██████╗ ███████╗     ██████╗ ██████╗  █████╗ ██╗   ██╗███████╗██╗   ██╗ █████╗ ██████╗ ██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔════╝    ██╔════╝ ██╔══██╗██╔══██╗██║   ██║██╔════╝╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗
██║     ██║   ██║██║  ██║█████╗      ██║  ███╗██████╔╝███████║██║   ██║█████╗   ╚████╔╝ ███████║██████╔╝██║  ██║
██║     ██║   ██║██║  ██║██╔══╝      ██║   ██║██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝    ╚██╔╝  ██╔══██║██╔══██╗██║  ██║
╚██████╗╚██████╔╝██████╔╝███████╗    ╚██████╔╝██║  ██║██║  ██║ ╚████╔╝ ███████╗   ██║   ██║  ██║██║  ██║██████╔╝
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝                                                                                                           

//                          Pour one out for the unused code homies

function ValidateEmail(mail) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value))
  {
    return (true)
  } else {
    return "Please enter a valid email address";
  }
}

__tests__/            // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/                // classes
src/                // template helper code
Index.js            // runs the application

*/