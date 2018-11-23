import _ from 'lodash';

const stringify = (value) => {
  if (value instanceof Object) {
    const valueKeys = _.keys(value);
    const elementsOfValue = valueKeys.reduce((acc, key) => [...acc, `            ${key}: ${value[key]}`], []);
    return `{\n${elementsOfValue.join('\n')}\n        }`;
  }
  return value;
};

const propertyActions = {
  unchanged: (data, f) => {
    if (data.children instanceof Object) {
      return `    ${data.key}: ${f(data.children)}`;
    }
    return `        ${data.key}: ${stringify(data.valueBefore)}`;
  },
  changed: data => `      - ${data.key}: ${stringify(data.valueBefore)}\n      + ${data.key}: ${stringify(data.valueAfter)}`,
  added: data => `      + ${data.key}: ${stringify(data.valueAfter)}`,
  deleted: data => `      - ${data.key}: ${stringify(data.valueBefore)}`,
};

const rende = (data) => {
  const renderedData = data.reduce((acc, value) => {
    const stateValue = value.state;
    // console.log('ЗНАЧЕНИЕ', value);
    // console.log('АККУМУЛЯТОР', acc);
    return [...acc, propertyActions[stateValue](value, rende)];
  }, []);
  return `{\n${renderedData.join('\n')}\n        }`;
};

export default rende;


/*
const propertyActions = [
  {
    name: 'key',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'valueBefore',
    check: arg => arg instanceof Object,
  },
  {
    name: 'valueAfter',
    check: arg => arg instanceof Object,
  },
  {
    name: 'state',
    check: arg => arg instanceof Object,
  },
];
*/
