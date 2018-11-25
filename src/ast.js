import _ from 'lodash';

const keyTypes = [{
  type: 'nested',
  check: (dataBefore, dataAfter, key) => (dataBefore[key] instanceof Object
    && dataAfter[key] instanceof Object),
  process: (valueBefore, valueAfter, f) => [valueBefore, valueAfter, f(valueBefore, valueAfter)],
},
{
  type: 'unchanged',
  check: (dataBefore, dataAfter, key) => (_.has(dataBefore, key) && _.has(dataAfter, key))
  && (dataBefore[key] === dataAfter[key]),
  process: (valueBefore, valueAfter) => [valueBefore, valueAfter],
},
{
  type: 'changed',
  check: (dataBefore, dataAfter, key) => (_.has(dataBefore, key) && _.has(dataAfter, key))
  && (dataBefore[key] !== dataAfter[key]),
  process: (valueBefore, valueAfter) => [valueBefore, valueAfter],
},
{
  type: 'deleted',
  check: (dataBefore, dataAfter, key) => (_.has(dataBefore, key) && !_.has(dataAfter, key)),
  process: (valueBefore, valueAfter) => [valueBefore, valueAfter],
},
{
  type: 'added',
  check: (dataBefore, dataAfter, key) => (!_.has(dataBefore, key) && _.has(dataAfter, key)),
  process: (valueBefore, valueAfter) => [valueBefore, valueAfter],
},
];

const makeAST = (dataBefore = {}, dataAfter = {}) => {
  const uniqKeys = _.union(Object.keys(dataBefore), Object.keys(dataAfter));
  const result = uniqKeys.map((key) => {
    const { type, process } = _.find(keyTypes, item => item.check(dataBefore, dataAfter, key));
    const [valueBefore, valueAfter, children] = process(dataBefore[key], dataAfter[key], makeAST);
    return {
      type, valueBefore, valueAfter, key, children,
    };
  });
  return result;
};

export default makeAST;
