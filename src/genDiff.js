import fs from 'fs';
import _ from 'lodash';

const genDiff = (pathToFile1, pathToFile2) => {
  const parseJsonFromFile1 = JSON.parse(fs.readFileSync(pathToFile1).toString());
  const parseJsonFromFile2 = JSON.parse(fs.readFileSync(pathToFile2).toString());
  const keysFromJsons = Object.keys(parseJsonFromFile1).concat(Object.keys(parseJsonFromFile2));
  const keysSet = Array.from(new Set(keysFromJsons));
  const result = keysSet.reduce((acc, key) => {
    if (_.has(parseJsonFromFile1, key)) {
      if (_.has(parseJsonFromFile2, key)) {
        if (parseJsonFromFile1[key] === parseJsonFromFile2[key]) {
          acc.push(`  ${key}: ${parseJsonFromFile1[key]}`);
          return acc;
        }
        acc.push(`- ${key}: ${parseJsonFromFile1[key]}`);
        acc.push(`+ ${key}: ${parseJsonFromFile2[key]}`);
        return acc;
      }
      acc.push(`- ${key}: ${parseJsonFromFile1[key]}`);
      return acc;
    }
    acc.push(`+ ${key}: ${parseJsonFromFile2[key]}`);
    return acc;
  }, []);
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
