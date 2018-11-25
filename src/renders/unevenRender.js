import _ from 'lodash';

const stringify = (value, indent) => {
  if (!_.isObject(value)) {
    return (value);
  }
  const elementsOfValue = _.keys(value)
    .reduce((acc, key) => [...acc, `${' '.repeat(indent + 4)}${key}: ${value[key]}`], []);
  return ['{', ...elementsOfValue, `${' '.repeat(indent)}}`].join('\n');
};

const typeActions = {
  unchanged: (data, indent) => `${' '.repeat(indent)}${data.key}: ${stringify(data.value, indent)}`,
  nested: (data, indent, f) => `${' '.repeat(indent)}${data.key}: ${f(data.value, indent + 4)}`,
  changed: (data, indent) => [`${' '.repeat(indent - 2)}- ${data.key}: ${stringify(data.value.valueBefore, indent)}`,
    `${' '.repeat(indent - 2)}+ ${data.key}: ${stringify(data.value.valueAfter, indent)}`],
  added: (data, indent) => `${' '.repeat(indent - 2)}+ ${data.key}: ${stringify(data.value, indent)}`,
  deleted: (data, indent) => `${' '.repeat(indent - 2)}- ${data.key}: ${stringify(data.value, indent)}`,
};

const unevenRende = (data, indent = 4) => {
  const renderedData = data.reduce((acc, value) => {
    const typeValue = value.type;
    return [...acc, typeActions[typeValue](value, indent, unevenRende)];
  }, []);
  return _.flatten(['{', ...renderedData, `${' '.repeat(indent - 4)}}`]).join('\n');
};

export default unevenRende;
