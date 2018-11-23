import fs from 'fs';
// import genDiff from '../src';

import { render, pathToData } from '../src';

test('json', () => {
  const pathBeforeJson = './__tests__/__fixtures__/json/recursionBefore.json';
  const pathAeforeJson = './__tests__/__fixtures__/json/recursionAfter.json';
  const toBeValue = fs.readFileSync('./__tests__/__fixtures__/json/recursionDiff.json').toString();
  expect(render(pathToData(pathBeforeJson, pathAeforeJson))).toBe(toBeValue);
});
/*
test('json', () => {
  const pathBeforeJson = './__tests__/__fixtures__/json/before.json';
  const pathAeforeJson = './__tests__/__fixtures__/json/after.json';
  const toBeValue = fs.readFileSync('./__tests__/__fixtures__/json/diff.json').toString();
  expect(genDiff(pathBeforeJson, pathAeforeJson)).toBe(toBeValue);
  const pathNewBeforeJson = './__tests__/__fixtures__/json/newBefore.json';
  const pathNewafterJson = './__tests__/__fixtures__/json/newAfter.json';
  const toBeNewValue = fs.readFileSync('./__tests__/__fixtures__/json/newDiff.json').toString();
  expect(genDiff(pathNewBeforeJson, pathNewafterJson)).toBe(toBeNewValue);
});

test('yaml', () => {
  const pathBeforeYaml = './__tests__/__fixtures__/yaml/before.yaml';
  const pathAeforeYaml = './__tests__/__fixtures__/yaml/after.yaml';
  const toBeValue = fs.readFileSync('./__tests__/__fixtures__/yaml/diff.yaml').toString();
  expect(genDiff(pathBeforeYaml, pathAeforeYaml)).toBe(toBeValue);
  const pathNewBeforeYaml = './__tests__/__fixtures__/yaml/newBefore.yaml';
  const pathNewafterYaml = './__tests__/__fixtures__/yaml/newAfter.yaml';
  const toBeNewValue = fs.readFileSync('./__tests__/__fixtures__/yaml/newDiff.yaml').toString();
  expect(genDiff(pathNewBeforeYaml, pathNewafterYaml)).toBe(toBeNewValue);
});

test('ini', () => {
  const pathBeforeIni = './__tests__/__fixtures__/ini/before.ini';
  const pathAeforeIni = './__tests__/__fixtures__/ini/after.ini';
  const toBeValue = fs.readFileSync('./__tests__/__fixtures__/ini/diff.ini').toString();
  expect(genDiff(pathBeforeIni, pathAeforeIni)).toBe(toBeValue);
  const pathNewBeforeIni = './__tests__/__fixtures__/ini/newBefore.ini';
  const pathNewafterIni = './__tests__/__fixtures__/ini/newAfter.ini';
  const toBeNewValue = fs.readFileSync('./__tests__/__fixtures__/ini/newDiff.ini').toString();
  expect(genDiff(pathNewBeforeIni, pathNewafterIni)).toBe(toBeNewValue);
});
*/
