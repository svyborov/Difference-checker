import unevenRende from './unevenRender';
import plainRende from './plainRender';
import jsonRende from './jsonRender';

const renders = {
  plain: plainRende,
  uneven: unevenRende,
  json: jsonRende,
};

export default (data, format) => renders[format](data);
