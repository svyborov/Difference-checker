import _ from 'lodash';

const stringify = (value, indent) => {
  if (value instanceof Object) {
    const elementsOfValue = _.keys(value)
      .reduce((acc, key) => [...acc, `${' '.repeat(indent + 4)}${key}: ${value[key]}`], []);
    return ['{', ...elementsOfValue, `${' '.repeat(indent)}}`].join('\n');
  }
  return value;
};

const stateActions = {
  unchanged: (data, indent, f) => {
    if (data.children instanceof Object) {
      return `${' '.repeat(indent)}${data.key}: ${f(data.children, indent + 4)}`;
    }
    return `${' '.repeat(indent)}${data.key}: ${stringify(data.valueBefore, indent)}`;
  },
  changed: (data, indent) => [`${' '.repeat(indent - 2)}- ${data.key}: ${stringify(data.valueBefore, indent)}`,
    `${' '.repeat(indent - 2)}+ ${data.key}: ${stringify(data.valueAfter, indent)}`],
  added: (data, indent) => `${' '.repeat(indent - 2)}+ ${data.key}: ${stringify(data.valueAfter, indent)}`,
  deleted: (data, indent) => `${' '.repeat(indent - 2)}- ${data.key}: ${stringify(data.valueBefore, indent)}`,
};

const rende = (data, indent = 4) => {
  const renderedData = data.reduce((acc, value) => {
    const stateValue = value.state;
    return [...acc, stateActions[stateValue](value, indent, rende)];
  }, []);
  return _.flatten(['{', ...renderedData, `${' '.repeat(indent - 4)}}`]).join('\n');
};

export default rende;
