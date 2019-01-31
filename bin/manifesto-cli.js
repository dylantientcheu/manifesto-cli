#!/usr/bin/env node

var chalk = require('chalk');
var program = require('commander');
var repo = require('../lib/repo');
var docs = require('../lib/docs');
var generate = require('../lib/generate');

program.usage('<command> [options]');
program
  .version(require('../package').version)
  .usage('<command> [options]')
  .description('CLI manifest generator');

program
  .command('generate')
  .description('Generate a web manifest – powered by manifesto.')
  .option(
    '-m, --minimalist',
    'Quickly generate the most minimal web manifest possible.'
  )
  .action(options => {
    var option = options.minimalist || false;
    generate.generate(option);
  });

program
  .command('docs')
  .description('Opens documentation on web manifests')
  .action(() => docs.openDocs());

program
  .command('repo')
  .description('Opens manifesto repository')
  .action(() => repo.openRepo());

program.arguments('<command>').action(cmd => {
  program.outputHelp();
  // eslint-disable-next-line no-console
  console.log('   ' + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
});

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}

program.parse(process.argv);
