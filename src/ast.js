import _ from 'lodash';

const makeAST = (beforeDataToDiff, afterDataToDiff) => {
  const uniqKeys = _.union(Object.keys(beforeDataToDiff), Object.keys(afterDataToDiff));
  const result = uniqKeys.reduce((acc, key) => {
    if (_.has(beforeDataToDiff, key)) {
      if (_.has(afterDataToDiff, key)) {
        if (beforeDataToDiff[key] instanceof Object && afterDataToDiff[key] instanceof Object) {
          return [...acc, { key, state: 'unchanged', children: makeAST(beforeDataToDiff[key], afterDataToDiff[key]) }];
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
  return result;
};

export default makeAST;
