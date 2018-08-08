var inquirer = require('inquirer');
var chalk = require('chalk');

inquirer.prompt([ {
    type: 'confirm',
    name: 'test',
    message: 'Are you handsome?',
    default: true
}]).then((answers) => {
    console.log(chalk.blue(answers))
})
