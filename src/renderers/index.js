import unevenRender from './unevenRender';
import plainRender from './plainRender';
import jsonRender from './jsonRender';

const renderers = {
  plain: plainRender,
  uneven: unevenRender,
  json: jsonRender,
};

export default (data, format) => renderers[format](data);
