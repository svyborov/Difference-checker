import _ from 'lodash';

const stringify = (value, level) => {
  if (!_.isObject(value)) {
    return (value);
  }
  const elementsOfValue = _.keys(value)
    .reduce((acc, key) => [...acc, `${' '.repeat(level * 4)}${key}: ${value[key]}`], []);
  return ['{', ...elementsOfValue, `${' '.repeat((level - 1) * 4)}}`].join('\n');
};

const typeActions = {
  unchanged: (data, level) => `${' '.repeat(level * 4)}${data.key}: ${stringify(data.valueBefore, level + 1)}`,
  nested: (data, level, f) => `${' '.repeat(level * 4)}${data.key}: ${f(data.children, level + 1)}`,
  changed: (data, level) => [`${' '.repeat(level * 4 - 2)}- ${data.key}: ${stringify(data.valueBefore, level + 1)}`,
    `${' '.repeat(level * 4 - 2)}+ ${data.key}: ${stringify(data.valueAfter, level + 1)}`],
  added: (data, level) => `${' '.repeat(level * 4 - 2)}+ ${data.key}: ${stringify(data.valueAfter, level + 1)}`,
  deleted: (data, level) => `${' '.repeat(level * 4 - 2)}- ${data.key}: ${stringify(data.valueBefore, level + 1)}`,
};

const unevenRender = (data, level = 1) => {
  const renderedData = data.reduce((acc, value) => {
    const typeValue = value.type;
    return [...acc, typeActions[typeValue](value, level, unevenRender)];
  }, []);
  return _.flatten(['{', ...renderedData, `${' '.repeat(level * 4 - 4)}}`]).join('\n');
};

export default unevenRender;
