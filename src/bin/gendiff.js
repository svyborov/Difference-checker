#!/usr/bin/env node
import gendiff from 'commander';
import { genDiff } from '..';

gendiff
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('[pathBefore] [pathAfter]')
  .action((pathBefore, pathAfter) => console.log(genDiff(pathBefore, pathAfter, gendiff.format)))
  .parse(process.argv);
