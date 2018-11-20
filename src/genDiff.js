const fs = require('fs');
const _ = require('lodash');

const genDiff = (pathToFile1, pathToFile2) => {
  console.log(pathToFile1);
  console.log(pathToFile2);
  const jsonFromFile1 = fs.readFileSync(pathToFile1).toString();
  const jsonFromFile2 = fs.readFileSync(pathToFile2).toString();
  console.log(jsonFromFile1);
  console.log(jsonFromFile2);
  const parseJson2 = JSON.parse(jsonFromFile2);
  console.log('ПАРСЕ ДЖЕЙСОН 2', parseJson2);
  // console.log('КЛЮЧИ ВТОРОГО ФАЙЛА', Object.keys(jsonFromFile2));
  // console.log(Object.keys(JSON.parse(jsonFromFile2)));
  const result = [];
  JSON.parse(jsonFromFile1, (key, value) => {
    console.log('КЛЮЧ', key);
    console.log('ЗНАЧЕНИЕ', value);
    if (_.has(parseJson2, key)) {
      if (parseJson2[key] !== value) {
        result.push(`- ${key}:${value}`);
        result.push(`+ ${key}:${parseJson2[key]}`);
      } else {
        result.push(`  ${key}:${value}`);
      }
    } else {
      result.push(`- ${key}:${value}`);
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

module.exports = genDiff;


/*  const result = [];
  JSON.parse(jsonFromFile1, (key, value) => {
    console.log('КЛЮЧ', key);
    console.log('ЗНАЧЕНИЕ', value);
    if (_.has(parseJson2, key)) {
      if (parseJson2[key] !== value) {
        result.push(`- ${key}:${value}`);
        result.push(`+${key}:${parseJson2[key]}`);
      } else {
        result.push(`${key}:${value}`);
      }
    } else {
      result.push(`- ${key}:${value}`);
    }
  });
  return `{\n${result.join('\n')}\n}`;
};
*/
