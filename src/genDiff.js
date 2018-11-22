import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import parser from './parsers';

const genDiff = (pathToFile1, pathToFile2) => {
  const extnameFile = path.extname(pathToFile1);
  const dataToParse1 = fs.readFileSync(pathToFile1, 'utf-8');
  const dataToParse2 = fs.readFileSync(pathToFile2, 'utf-8');
  const parsedData1 = parser(dataToParse1, extnameFile);
  const parsedData2 = parser(dataToParse2, extnameFile);
  const uniqKeys = _.union(Object.keys(parsedData1), Object.keys(parsedData2));
  const result = uniqKeys.reduce((acc, key) => {
    if (_.has(parsedData1, key)) {
      if (_.has(parsedData2, key)) {
        if (parsedData1[key] === parsedData2[key]) {
          return [...acc, `  ${key}: ${parsedData1[key]}`];
        }
        return [...acc, `- ${key}: ${parsedData1[key]}`, `+ ${key}: ${parsedData2[key]}`];
      }
      return [...acc, `- ${key}: ${parsedData1[key]}`];
    }
    return [...acc, `+ ${key}: ${parsedData2[key]}`];
  }, []);
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
