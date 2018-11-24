import _ from 'lodash';

const makeAST = (beforeData, afterData) => {
  const uniqKeys = _.union(Object.keys(beforeData), Object.keys(afterData));
  const result = uniqKeys.reduce((acc, key) => {
    if (_.has(beforeData, key)) {
      if (_.has(afterData, key)) {
        if (beforeData[key] instanceof Object && afterData[key] instanceof Object) {
          return [...acc, { key, state: 'unchanged', children: makeAST(beforeData[key], afterData[key]) }];
        }
        if (beforeData[key] === afterData[key]) {
          return [...acc, { key, state: 'unchanged', valueBefore: beforeData[key] }];
        }
        return [...acc, {
          key,
          valueBefore: beforeData[key],
          valueAfter: afterData[key],
          state: 'changed',
        }];
      }
      return [...acc, { key, valueBefore: beforeData[key], state: 'deleted' }];
    }
    return [...acc, { key, valueAfter: afterData[key], state: 'added' }];
  }, []);
  return result;
};

export default makeAST;
