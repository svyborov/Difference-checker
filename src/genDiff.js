import path from 'path';
import { yamlParser, jsonParser } from './parsers';

const genDiff = (pathToFile1, pathToFile2) => {
  const extnameFile = path.extname(pathToFile1);
  // const extnameFile2 = path.extname(pathToFile2);
  // Создаем нужный объект и передаем ему всю хуйню. После этого вовзараем резльтат
  if (extnameFile === '.json') {
    return jsonParser(pathToFile1, pathToFile2);
  }
  return yamlParser(pathToFile1, pathToFile2);
};

export default genDiff;
