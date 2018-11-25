import path from 'path';
import fs from 'fs';
import parse from './parsers';
import makeAST from './ast';
import render from './renderers';

const genDiff = (pathToBeforeFile, pathToAfterFile, format = 'uneven') => {
  const extnameFile = path.extname(pathToBeforeFile);
  const dataToParse1 = fs.readFileSync(pathToBeforeFile, 'utf-8');
  const dataToParse2 = fs.readFileSync(pathToAfterFile, 'utf-8');
  const parsedData1 = parse(dataToParse1, extnameFile);
  const parsedData2 = parse(dataToParse2, extnameFile);
  const ast = makeAST(parsedData1, parsedData2);
  return render(ast, format);
};

export default genDiff;
