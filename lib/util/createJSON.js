var fs = require('fs');
const chalk = require('chalk');
const log = console.log;

module.exports.createJSON = function(answers, arg) {
  let result = addApps(addIcons(answers, arg), arg);
  result = JSON.stringify(result, null, '  ');
  fs.writeFile('manifest.json', result, 'utf8', () => {
    log(chalk.yellow.bold('\n\nYour "manifest.json" was generated. :)'));
    isAdditional(answers.icons, answers.apps);
  });
};

function isAdditional(icons, apps) {
  if (icons || apps) {
    log(
      chalk.yellow.bold(
        '\nYou added additional icons or apps. Remember to edit their path, src and size(s) accordingly\n'
      )
    );
  }
}

function addIcons(answers, arg) {
  if (answers.iconsNo !== 'None' && !arg) {
    let anIcon = {
      src: 'folder/example.png',
      sizes: '48x48',
      type: 'image/png'
    };
    answers.icons = new Array(parseInt(answers.iconsNo));
    answers.icons.fill(anIcon);

    delete answers.iconsNo;
    return answers;
  }
  if (arg) {
    answers.icons = [
      {
        src: answers.iconSrc,
        sizes: answers.iconSize,
        type: answers.iconType
      }
    ];
    delete answers.iconSrc;
    delete answers.iconSize;
    delete answers.iconType;
    return answers;
  }
  if (answers.iconsNo === 'None') {
    delete answers.iconsNo;
    return answers;
  }
}

function addApps(answers, arg) {
  if (answers.appsNo !== 'None' && !arg) {
    let anApp = {
      platform: 'play',
      url: 'https://play.google.com/store/apps/details?id=com.example.app1',
      id: 'com.example.app'
    };
    answers.related_applications = new Array(parseInt(answers.appsNo));
    answers.related_applications.fill(anApp);

    delete answers.appsNo;
    return answers;
  } else {
    delete answers.appsNo;
    return answers;
  }
}
