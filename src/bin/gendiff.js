#!/usr/bin/env node
import gendiff from 'commander';
import genDiff1 from '..';
// const gendiff = require('commander');

gendiff
  .version('0.0.15')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('[json1path] [json2path]')
  .action((...args) => (console.log(genDiff1(...args))))
  .parse(process.argv);
