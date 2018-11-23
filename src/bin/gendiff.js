#!/usr/bin/env node
import gendiff from 'commander';
import { genDiff, render } from '..';
// const gendiff = require('commander');

gendiff
  .version('0.0.32')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('[json1path] [json2path]')
  .action((...args) => (console.log(render(genDiff(...args)))))
  .parse(process.argv);
