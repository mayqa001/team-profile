const Manager = require("./manager");
const Enginner = require("./engineer");
const Intern = require("./intern");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = require("./questions");
const createHtml = require("./pageGenerate");




let name, id, email, officeNumber, username, school;
var team = [];

function createEmployee() {
  let temp = inquirer.prompt(questions.baseQuestions).then((ans) => {
    name = ans.name;
    email = ans.email;
    id = ans.id;
    return ans.position;
  });
  return temp;
}

function createManager() {
  let temp = inquirer.prompt(questions.managerQuestion).then((ans) => {
    officeNumber = ans.office;
    return new Manager(name, id, email, officeNumber);
  });
  return temp;
}

function createEnginner() {
  let temp = inquirer.prompt(questions.enginnerQuestion).then((ans) => {
    username = ans.username;
    return new Enginner(name, id, email, username);
  });
  return temp;
}
//return a promise obj has value of intern obj
function createIntern() {
  let temp = inquirer.prompt(questions.internQuestion).then((ans) => {
    school = ans.school;
    return new Intern(name, id, email, school);
  });
  return temp;
}

async function createRole(position) {
  if (position === "Manager") {
    let manager = await createManager();
    team.push(manager);
  } else if (position === "Engineer") {
    let engineer = await createEnginner();
    team.push(engineer);
  } else if (position === "Intern") {
    let intern = await createIntern();
    team.push(intern);
  }
}

async function confirmAdd() {
  let temp = await inquirer.prompt(questions.confirm);
  return temp.input;
}

async function main() {
  let loop = true;
  while (loop === true) {
    const position = await createEmployee();
    await createRole(position);
    loop = await confirmAdd();
    console.log("================================");
  }
  createHtml.createHtml(team);
}

main();

