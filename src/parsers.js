import fs from 'fs';
import _ from 'lodash';
import yaml from 'js-yaml';
import ini from 'ini';

const parser = (dataToDiff1, dataToDiff2) => {
  const keysFromJsons = Object.keys(dataToDiff1).concat(Object.keys(dataToDiff2));
  const uniqKeys = _.uniq(keysFromJsons);
  const result = uniqKeys.reduce((acc, key) => {
    if (_.has(dataToDiff1, key)) {
      if (_.has(dataToDiff2, key)) {
        if (dataToDiff1[key] === dataToDiff2[key]) {
          return [...acc, `  ${key}: ${dataToDiff1[key]}`];
        }
        return [...acc, `- ${key}: ${dataToDiff1[key]}`, `+ ${key}: ${dataToDiff2[key]}`];
      }
      return [...acc, `- ${key}: ${dataToDiff1[key]}`];
    }
    return [...acc, `+ ${key}: ${dataToDiff2[key]}`];
  }, []);
  return `{\n${result.join('\n')}\n}`;
};

export const yamlParser = (file1, file2) => {
  const parseYamlFromFile1 = yaml.safeLoad(fs.readFileSync(file1, 'utf-8'));
  const parseYamlFromFile2 = yaml.safeLoad(fs.readFileSync(file2, 'utf-8'));
  return parser(parseYamlFromFile1, parseYamlFromFile2);
};

export const jsonParser = (file1, file2) => {
  const parseJsonFromFile1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
  const parseJsonFromFile2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));
  return parser(parseJsonFromFile1, parseJsonFromFile2);
};

export const iniParser = (file1, file2) => {
  const parseIniFromFile1 = ini.parse(fs.readFileSync(file1, 'utf-8'));
  const parseIniFromFile2 = ini.parse(fs.readFileSync(file2, 'utf-8'));
  return parser(parseIniFromFile1, parseIniFromFile2);
};
