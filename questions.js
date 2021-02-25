const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input', 
        message: 'What is your ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type:'list',
        message:'Whay is the role?',
        name:'position',
        choices:["Manager",
        "Engineer",
        "Intern"           
        ]
    },
]

const managerQuestion = [
    {
            type: 'input',
            message: 'What is your Office number?',
            name: 'office',
    },
]

const enginnerQuestion = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
]

const internQuestion = [
    {
        type: 'input',
        message: 'What is your School name?',
        name: 'school',
    },
]
const confirm = [
    {
        type: 'confirm',
        message: 'Do you want to input more employee information?',
        name: 'input',
    },
]

module.exports.baseQuestions = questions;
module.exports.managerQuestion= managerQuestion;
module.exports.enginnerQuestion= enginnerQuestion;
module.exports.internQuestion= internQuestion;
module.exports.confirm= confirm;

