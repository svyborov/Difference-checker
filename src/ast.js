import _ from 'lodash';

const makeAST = (beforeData, afterData) => {
  const uniqKeys = _.union(Object.keys(beforeData), Object.keys(afterData));
  const result = uniqKeys.reduce((acc, key) => {
    if (_.has(beforeData, key)) {
      if (_.has(afterData, key)) {
        if (beforeData[key] instanceof Object && afterData[key] instanceof Object) {
          return [...acc, { key, type: 'nested', children: makeAST(beforeData[key], afterData[key]) }];
        }
        if (beforeData[key] === afterData[key]) {
          return [...acc, { key, type: 'unchanged', valueBefore: beforeData[key] }];
        }
        return [...acc, {
          key,
          valueBefore: beforeData[key],
          valueAfter: afterData[key],
          type: 'changed',
        }];
      }
      return [...acc, { key, valueBefore: beforeData[key], type: 'deleted' }];
    }
    return [...acc, { key, valueAfter: afterData[key], type: 'added' }];
  }, []);
  return result;
};

export default makeAST;
