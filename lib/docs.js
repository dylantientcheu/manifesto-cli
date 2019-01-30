var inquirer = require('inquirer');
const chalk = require('chalk');
var open = require('opn');

const openDocs = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'docs',
        message: 'What documentation suit you best ?',
        choices: ['WC3 docs - Detailed', 'MDN docs - Straightforward']
      }
    ])
    .then(answers => {
      if (answers.repo === 'WC3 docs - Detailed') {
        console.log(
          chalk.yellow('\n\n\tOpening WC3 docs on your default browser...\n\n')
        );
        open('https://www.w3.org/TR/appmanifest/');
      } else {
        console.log(
          chalk.yellow('\n\n\tOpening MDN docs on your default browser...\n\n')
        );
        open('https://developer.mozilla.org/en-US/docs/Web/Manifest');
      }
    });
};

module.exports = { openDocs };
