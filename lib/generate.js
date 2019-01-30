var inquirer = require('inquirer');
var jsonCreator = require('./util/createJSON');

const questions = [
  { type: 'input', name: 'name', message: 'Enter your app\'s name' },
  { type: 'input', name: 'shortName', message: 'Enter your app\'s short name' },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description to your app'
  },
  {
    type: 'input',
    name: 'lang',
    message: 'Enter your app\'s language (ex. en-US)'
  },
  {
    type: 'list',
    name: 'direction',
    message: 'App\'s text direction (for arabic and other languages)',
    choices: ['rtl', 'ltr']
  },
  {
    type: 'list',
    name: 'display',
    message: 'App\'s display mode ',
    choices: ['Standalone', 'Fullscreen', 'Minimalistic UI', 'Browser']
  },
  {
    type: 'list',
    name: 'orientation',
    message: 'App\'s display mode ',
    choices: [
      'Any',
      'Landscape',
      'Landscape-primary',
      'Landscape-secondary',
      'Portrait',
      'Portrait-primary',
      'Portrait-secondary',
      'Natural'
    ]
  },
  {
    type: 'input',
    name: 'theme_color',
    message: 'Theme color (black or #000000)'
  },
  {
    type: 'input',
    name: 'background_color',
    message: 'Background color (white or #ffffff)'
  },
  {
    type: 'input',
    name: 'start_url',
    message: 'App\'s start URL (ex. /index.html)'
  },
  {
    type: 'input',
    name: 'scope',
    message: 'Scope through which the manifest applies (ex. /myapp/)'
  },
  {
    type: 'list',
    name: 'iconsNo',
    message: 'How many icons do you want to link to this manifest ?',
    choices: ['None', '1', '2', '3', '4', '5', '6', '7']
  },
  {
    type: 'list',
    name: 'appsNo',
    message: 'How many related apps do you want to link ?',
    choices: ['None', '1', '2']
  }
];

const minimalQuestions = [
  { type: 'input', name: 'name', message: 'Enter your app\'s name' },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description to your app'
  },
  {
    type: 'input',
    name: 'iconSrc',
    message:
      'Enter the path to your icon (relative to the manifest location in your app)'
  },
  {
    type: 'input',
    name: 'iconType',
    message: 'Enter the type of the icon (ex. image/png | image/webp)'
  },
  {
    type: 'input',
    name: 'iconSize',
    message: 'Enter the size of your icon (ex. 48x48)'
  }
];

const generate = function(arg) {
  if (arg === true) {
    inquirer.prompt(minimalQuestions).then(answers => {
      jsonCreator.createJSON(answers, arg);
    });
  } else {
    inquirer.prompt(questions).then(answers => {
      jsonCreator.createJSON(answers, arg);
    });
  }
};

module.exports = { generate };
