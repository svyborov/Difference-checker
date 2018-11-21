import path from 'path';
import { yamlParser, jsonParser, iniParser } from './parsers';

const genDiff = (pathToFile1, pathToFile2) => {
  const extnameFile = path.extname(pathToFile1);
  if (extnameFile === '.json') {
    return jsonParser(pathToFile1, pathToFile2);
  } if (extnameFile === '.yaml') {
    return yamlParser(pathToFile1, pathToFile2);
  }
  return iniParser(pathToFile1, pathToFile2);
};

export default genDiff;
