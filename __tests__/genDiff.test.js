import fs from 'fs';
import genDiff from '../src';

test('path', () => {
  const exeptValue1 = genDiff('./__tests__/__fixtures__/before.json', './__tests__/__fixtures__/after.json');
  const toBeValue1 = fs.readFileSync('./__tests__/__fixtures__/diff.json').toString();
  expect(exeptValue1).toBe(toBeValue1);
  const exeptValue2 = genDiff('./__tests__/__fixtures__/newBefore.json', './__tests__/__fixtures__/newAfter.json');
  const toBeValue2 = fs.readFileSync('./__tests__/__fixtures__/newDiff.json').toString();
  expect(exeptValue2).toBe(toBeValue2);
});
