import fs from 'fs';
import { resolve } from 'path';
import genDiff from '../src/genDiff';


const path1 = './__tests__/__fixtures__/before.json';
const path2 = './__tests__/__fixtures__/after.json';
const path3 = './__tests__/__fixtures__/diff.json';
test('relativePath', () => {
  expect(genDiff(path1, path2)).toBe(fs.readFileSync('./__tests__/__fixtures__/diff.json').toString());
});

test('absolutePath', () => {
  expect(genDiff(resolve(path1), resolve(path2))).toBe(fs.readFileSync(resolve(path3)).toString());
});
