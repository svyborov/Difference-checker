import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import parse from './parsers';


const genDiff = (beforeDataToDiff, afterDataToDiff) => {
  // console.log('Объект ПЕРЕД', beforeDataToDiff, '\nОбъект ПОСЛЕ', afterDataToDiff);
  const uniqKeys = _.union(Object.keys(beforeDataToDiff), Object.keys(afterDataToDiff));
  // console.log('КЛЮЧИ', uniqKeys);
  const result = uniqKeys.reduce((acc, key) => {
    if (_.has(beforeDataToDiff, key)) {
      if (_.has(afterDataToDiff, key)) {
        if (beforeDataToDiff[key] instanceof Object && afterDataToDiff[key] instanceof Object) {
          return [...acc, { key, state: 'unchanged', children: genDiff(beforeDataToDiff[key], afterDataToDiff[key]) }];
        }
        if (beforeDataToDiff[key] === afterDataToDiff[key]) {
          return [...acc, { key, state: 'unchanged', valueBefore: beforeDataToDiff[key] }];
        }
        return [...acc, {
          key,
          valueBefore: beforeDataToDiff[key],
          valueAfter: afterDataToDiff[key],
          state: 'changed',
        }];
      }
      return [...acc, {
        key,
        valueBefore: beforeDataToDiff[key],
        state: 'deleted',
      }];
    }
    return [...acc, {
      key,
      valueAfter: afterDataToDiff[key],
      state: 'added',
    }];
  }, []);
  // console.log('АСД:', result);
  return result;
};

/*
Берем ключ. Он есть в обоих? Если да, тогда оба значения объекты?
Если да, тогда сравниваем ключи и значения в этих объектах. заполняем state: unchanged
Если один из них не объект,тогда просто записываем в valueBefore и valueAfter.
sзаполняем state:changed
если есть только в первом, записываем в valueBefore, state: deleted
если есть только во втором, записываем в valueAfter, state: added
*/
const pathToData = (pathToFile1, pathToFile2) => {
  const extnameFile = path.extname(pathToFile1);
  const dataToParse1 = fs.readFileSync(pathToFile1, 'utf-8');
  const dataToParse2 = fs.readFileSync(pathToFile2, 'utf-8');
  const parsedData1 = parse(dataToParse1, extnameFile);
  const parsedData2 = parse(dataToParse2, extnameFile);
  return genDiff(parsedData1, parsedData2);
};

export default pathToData;
