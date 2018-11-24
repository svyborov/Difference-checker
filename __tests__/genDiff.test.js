import fs from 'fs';

import { genDiff } from '../src';

test('diffToJson', () => {
  const pathBeforeJson = './__tests__/__fixtures__/json/recursionBefore.json';
  const pathAeforeJson = './__tests__/__fixtures__/json/recursionAfter.json';
  const expectedJsonOutput = fs.readFileSync('./__tests__/__fixtures__/json/Exepted.json').toString();
  expect(genDiff(pathBeforeJson, pathAeforeJson, 'json')).toBe(expectedJsonOutput);
});

test('diffToPlain', () => {
  const pathBeforeJson = './__tests__/__fixtures__/json/recursionBefore.json';
  const pathAeforeJson = './__tests__/__fixtures__/json/recursionAfter.json';
  const expectedPlainOutput = fs.readFileSync('./__tests__/__fixtures__/json/plainRecursionDiff.json').toString();
  expect(genDiff(pathBeforeJson, pathAeforeJson, 'plain')).toBe(expectedPlainOutput);
});

test('uneven', () => {
  const pathBeforeJson = './__tests__/__fixtures__/json/recursionBefore.json';
  const pathAeforeJson = './__tests__/__fixtures__/json/recursionAfter.json';
  const expectedJsonOutput = fs.readFileSync('./__tests__/__fixtures__/json/recursionDiff.json').toString();
  expect(genDiff(pathBeforeJson, pathAeforeJson)).toBe(expectedJsonOutput);
});

test('yaml', () => {
  const pathBeforeYaml = './__tests__/__fixtures__/yaml/recursionBefore.yaml';
  const pathAeforeYaml = './__tests__/__fixtures__/yaml/recursionAfter.yaml';
  const expectedOutput = fs.readFileSync('./__tests__/__fixtures__/yaml/recursionDiff.yaml').toString();
  expect(genDiff(pathBeforeYaml, pathAeforeYaml)).toBe(expectedOutput);
});


test('ini', () => {
  const pathBeforeIni = './__tests__/__fixtures__/ini/recursionBefore.ini';
  const pathAeforeIni = './__tests__/__fixtures__/ini/recursionAfter.ini';
  const expectedOutput = fs.readFileSync('./__tests__/__fixtures__/ini/recursionDiff.ini').toString();
  expect(genDiff(pathBeforeIni, pathAeforeIni)).toBe(expectedOutput);
});
