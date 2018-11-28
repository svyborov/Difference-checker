import fs from 'fs';

import { genDiff } from '../src';

const jsonDir = './__tests__/__fixtures__/json';
const yamlDir = './__tests__/__fixtures__/yaml';
const iniDir = './__tests__/__fixtures__/ini';

test('diffToJson', () => {
  const pathBeforeJson = `${jsonDir}/recursionBefore.json`;
  const pathAeforeJson = `${jsonDir}/recursionAfter.json`;
  const expectedJsonOutput = fs.readFileSync(`${jsonDir}/Exepted.json`).toString();
  expect(genDiff(pathBeforeJson, pathAeforeJson, 'json')).toBe(expectedJsonOutput);
});

test('diffToPlain', () => {
  const pathBeforeJson = `${jsonDir}/recursionBefore.json`;
  const pathAeforeJson = `${jsonDir}/recursionAfter.json`;
  const expectedPlainOutput = fs.readFileSync(`${jsonDir}/plainRecursionDiff.json`).toString();
  expect(genDiff(pathBeforeJson, pathAeforeJson, 'plain')).toBe(expectedPlainOutput);
});

test('uneven', () => {
  const pathBeforeJson = `${jsonDir}/recursionBefore.json`;
  const pathAeforeJson = `${jsonDir}/recursionAfter.json`;
  const expectedJsonOutput = fs.readFileSync(`${jsonDir}/recursionDiff.json`).toString();
  expect(genDiff(pathBeforeJson, pathAeforeJson)).toBe(expectedJsonOutput);
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
