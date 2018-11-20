import fs from 'fs';
import genDiff from '../src/genDiff';

test('relativePath', () => {
  expect(genDiff('./__tests__/__fixtures__/before.json', './__tests__/__fixtures__/after.json')).toBe(fs.readFileSync('./__tests__/__fixtures__/diff.json').toString());
});

test('absolutePath', () => {
  expect(genDiff('/home/troyanec/projects/gendiff/__tests__/__fixtures__/before.json', '/home/troyanec/projects/gendiff/__tests__/__fixtures__/after.json')).toBe(fs.readFileSync('/home/troyanec/projects/gendiff/__tests__/__fixtures__/diff.json').toString());
});
