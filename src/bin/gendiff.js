#!/usr/bin/env node
const gendiff = require('commander');

gendiff
  .version('0.0.15')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .parse(process.argv);
