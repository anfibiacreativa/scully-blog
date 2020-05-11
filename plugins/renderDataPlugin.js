const {
  registerPlugin,
  configValidator
} = require('@scullyio/scully');

/* async function Plugin(html, route) {
  console.log('route tested', route);
  return Promise.resolve(html);
}
 */

async function renderDataPlugin(html, route) {
  console.log('route tested', route);
  console.log(html);
  // return Promise.resolve(html);
  const body = '</body>';
  const [begin, end] = html.split(body);
  const title = `<h2>The Truth Is Out There!</h2>`;
  return Promise.resolve(`${begin}${title}${body}${end}`)
}

renderDataPlugin[configValidator] = async options => {
  return [];
};

registerPlugin('render', 'renderData', renderDataPlugin);

module.exports.renderDataPlugin = renderDataPlugin;
