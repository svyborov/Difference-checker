import fs from 'fs';
import genDiff from '../src/genDiff';

test('path', () => {
  expect(genDiff('./__tests__/__fixtures__/before.json', './__tests__/__fixtures__/after.json')).toBe(fs.readFileSync('./__tests__/__fixtures__/diff.json').toString());
});

test('newPath', () => {
  expect(genDiff('./__tests__/__fixtures__/newBefore.json', './__tests__/__fixtures__/newAfter.json')).toBe(fs.readFileSync('./__tests__/__fixtures__/newDiff.json').toString());
});
