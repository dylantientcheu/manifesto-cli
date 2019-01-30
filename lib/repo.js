var inquirer = require('inquirer');
var open = require('opn');

const openRepo = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'repo',
        message: 'Which repo do you want to open ?',
        choices: ['manifesto-cli', 'manifesto-app']
      }
    ])
    .then(answers => {
      if (answers.repo === 'manifesto-cli') {
        console.log('\n\nOpening manifesto-cli repo on your browser...\n\n');
        open('https://github.com/blurdylan/manifesto');
      } else {
        console.log('\n\nOpening manifesto-app repo on your browser...\n\n');
        open('https://github.com/blurdylan/manifesto');
      }
    });
};

module.exports = { openRepo };
