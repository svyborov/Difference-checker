import fs from 'fs';
import genDiff from '../src';

test('json', () => {
  const exeptValue1 = genDiff('./__tests__/__fixtures__/json/before.json', './__tests__/__fixtures__/json/after.json');
  const toBeValue1 = fs.readFileSync('./__tests__/__fixtures__/json/diff.json').toString();
  expect(exeptValue1).toBe(toBeValue1);
  const exeptValue2 = genDiff('./__tests__/__fixtures__/json/newBefore.json', './__tests__/__fixtures__/json/newAfter.json');
  const toBeValue2 = fs.readFileSync('./__tests__/__fixtures__/json/newDiff.json').toString();
  expect(exeptValue2).toBe(toBeValue2);
});

test('yaml', () => {
  const exeptValue1 = genDiff('./__tests__/__fixtures__/yaml/before.yaml', './__tests__/__fixtures__/yaml/after.yaml');
  const toBeValue1 = fs.readFileSync('./__tests__/__fixtures__/yaml/diff.yaml').toString();
  expect(exeptValue1).toBe(toBeValue1);
  const exeptValue2 = genDiff('./__tests__/__fixtures__/yaml/newBefore.yaml', './__tests__/__fixtures__/yaml/newAfter.yaml');
  const toBeValue2 = fs.readFileSync('./__tests__/__fixtures__/yaml/newDiff.yaml').toString();
  expect(exeptValue2).toBe(toBeValue2);
});
