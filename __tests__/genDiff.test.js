import fs from 'fs';

import { genDiff } from '../src';

const jsonDir = './__tests__/__fixtures__/json';
const yamlDir = './__tests__/__fixtures__/yaml';
const iniDir = './__tests__/__fixtures__/ini';

const recursionBefore = `${jsonDir}/recursionBefore.json`;
const recursionAfter = `${jsonDir}/recursionAfter.json`;

test('diffToJson', () => {
  const expectedJsonOutput = fs.readFileSync(`${jsonDir}/Exepted.json`).toString();
  expect(genDiff(recursionBefore, recursionAfter, 'json')).toBe(expectedJsonOutput);
});

test('diffToPlain', () => {
  const expectedPlainOutput = fs.readFileSync(`${jsonDir}/plainRecursionDiff.json`).toString();
  expect(genDiff(recursionBefore, recursionAfter, 'plain')).toBe(expectedPlainOutput);
});

test('uneven', () => {
  const expectedJsonOutput = fs.readFileSync(`${jsonDir}/recursionDiff.json`).toString();
  expect(genDiff(recursionBefore, recursionAfter)).toBe(expectedJsonOutput);
});

test('yaml', () => {
  const pathBeforeYaml = `${yamlDir}/recursionBefore.yaml`;
  const pathAeforeYaml = `${yamlDir}/recursionAfter.yaml`;
  const expectedOutput = fs.readFileSync(`${yamlDir}/recursionDiff.yaml`).toString();
  expect(genDiff(pathBeforeYaml, pathAeforeYaml)).toBe(expectedOutput);
});


test('ini', () => {
  const pathBeforeIni = `${iniDir}/recursionBefore.ini`;
  const pathAeforeIni = `${iniDir}/recursionAfter.ini`;
  const expectedOutput = fs.readFileSync(`${iniDir}/recursionDiff.ini`).toString();
  expect(genDiff(pathBeforeIni, pathAeforeIni)).toBe(expectedOutput);
});
