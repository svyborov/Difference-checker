const genDiff = require('../src/genDiff');

test('firstTest', () => {
  expect(genDiff('/home/troyanec/projects/gendiff/__tests__/before.json', '/home/troyanec/projects/gendiff/__tests__/after.json')).toBe('{ host: hexlet.io + timeout: 20 - timeout: 50 - proxy: 123.234.53.22 + verbose: true - follow: false}');
});

//   expect(genDiff('.__fixtures__/before', '.__fixtures__/after')).toBe();
