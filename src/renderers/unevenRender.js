import _ from 'lodash';

const stringify = (value, indent) => {
  if (!_.isObject(value)) {
    return (value);
  }
  const elementsOfValue = _.keys(value)
    .reduce((acc, key) => [...acc, `${' '.repeat(indent * 4)}${key}: ${value[key]}`], []);
  return ['{', ...elementsOfValue, `${' '.repeat((indent - 1) * 4)}}`].join('\n');
};

const typeActions = {
  unchanged: (data, indent) => `${' '.repeat(indent * 4)}${data.key}: ${stringify(data.valueBefore, indent + 1)}`,
  nested: (data, indent, f) => `${' '.repeat(indent * 4)}${data.key}: ${f(data.children, indent + 1)}`,
  changed: (data, indent) => [`${' '.repeat(indent * 4 - 2)}- ${data.key}: ${stringify(data.valueBefore, indent + 1)}`,
    `${' '.repeat(indent * 4 - 2)}+ ${data.key}: ${stringify(data.valueAfter, indent + 1)}`],
  added: (data, indent) => `${' '.repeat(indent * 4 - 2)}+ ${data.key}: ${stringify(data.valueAfter, indent + 1)}`,
  deleted: (data, indent) => `${' '.repeat(indent * 4 - 2)}- ${data.key}: ${stringify(data.valueBefore, indent + 1)}`,
};

const unevenRender = (data, indent = 1) => {
  const renderedData = data.reduce((acc, value) => {
    const typeValue = value.type;
    return [...acc, typeActions[typeValue](value, indent, unevenRender)];
  }, []);
  return _.flatten(['{', ...renderedData, `${' '.repeat(indent * 4 - 4)}}`]).join('\n');
};

export default unevenRender;
