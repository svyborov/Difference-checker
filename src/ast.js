import _ from 'lodash';

const keyTypes = [{
  type: 'nested',
  check: (dataBefore, dataAfter, key) => (dataBefore[key] instanceof Object
    && dataAfter[key] instanceof Object),
  process: (valueBefore, valueAfter, f) => ({ children: f(valueBefore, valueAfter) }),
},
{
  type: 'unchanged',
  check: (dataBefore, dataAfter, key) => (_.has(dataBefore, key) && _.has(dataAfter, key))
  && (dataBefore[key] === dataAfter[key]),
  process: valueBefore => ({ valueBefore }),
},
{
  type: 'changed',
  check: (dataBefore, dataAfter, key) => (_.has(dataBefore, key) && _.has(dataAfter, key))
  && (dataBefore[key] !== dataAfter[key]),
  process: (valueBefore, valueAfter) => ({ valueBefore, valueAfter }),
},
{
  type: 'deleted',
  check: (dataBefore, dataAfter, key) => (_.has(dataBefore, key) && !_.has(dataAfter, key)),
  process: valueBefore => ({ valueBefore }),
},
{
  type: 'added',
  check: (dataBefore, dataAfter, key) => (!_.has(dataBefore, key) && _.has(dataAfter, key)),
  process: (valueBefore, valueAfter) => ({ valueAfter }),
},
];

const makeAST = (dataBefore = {}, dataAfter = {}) => {
  const uniqKeys = Object.keys({ ...dataBefore, ...dataAfter });
  const result = uniqKeys.map((key) => {
    const { type, process } = _.find(keyTypes, item => item.check(dataBefore, dataAfter, key));
    const values = process(dataBefore[key], dataAfter[key], makeAST);
    return { ...values, type, key };
  });
  return result;
};

export default makeAST;
