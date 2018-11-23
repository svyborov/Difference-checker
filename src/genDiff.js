import path from 'path';
import fs from 'fs';
import parse from './parsers';
import makeAST from './ast';

const genDiff = (pathToBeforeFile, pathToAfterFile) => {
  const extnameFile = path.extname(pathToBeforeFile);
  const dataToParse1 = fs.readFileSync(pathToBeforeFile, 'utf-8');
  const dataToParse2 = fs.readFileSync(pathToAfterFile, 'utf-8');
  const parsedData1 = parse(dataToParse1, extnameFile);
  const parsedData2 = parse(dataToParse2, extnameFile);
  return makeAST(parsedData1, parsedData2);
};

export default genDiff;
