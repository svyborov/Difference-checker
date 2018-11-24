import _ from 'lodash';

const stringify = (value) => {
  if (value instanceof Object) {
    return '[complex value]';
  }
  return value;
};

const stateActions = {
  unchanged: (data, parent, f) => {
    if (data.children instanceof Object) {
      return `${f(data.children, (`${data.key}.`))}`;
    }
    return '';
  },
  changed: (data, parent) => `${parent}${data.key} was updated. From ${stringify(data.valueBefore)} to ${stringify(data.valueAfter)}`,
  added: (data, parent) => `${parent}${data.key} was added with value: ${stringify(data.valueAfter)}`,
  deleted: (data, parent) => `${parent}${data.key} was removed`,
};

const plainRende = (data, parent = '') => {
  const renderedData = data.reduce((acc, value) => {
    const stateValue = value.state;
    return [...acc, stateActions[stateValue](value, parent, plainRende)];
  }, []).filter(value => value !== '');
  return _.flatten(renderedData).join('\n');
};

export default plainRende;
