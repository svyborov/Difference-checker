import fs from 'fs';
import genDiff from '../src';

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
