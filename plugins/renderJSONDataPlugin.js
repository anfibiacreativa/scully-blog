const {
  registerPlugin,
  configValidator
} = require('@scullyio/scully');

/* async function Plugin(html, route) {
  console.log('route tested', route);
  return Promise.resolve(html);
}
 */

async function renderJSONDataPlugin(html, route, data) {
  console.log('route tested', route);
  console.log(html);
  // return Promise.resolve(html);
  const { title, description } = data;
  const body = '</body>';
  const [begin, end] = html.split(body);
  const title = `<h2>${data.title}</h2>`;
  const description = `<p>${data.description}</p>`
  return Promise.resolve(`${begin}${title}${description}${body}${end}`);
}

renderJSONDataPlugin[configValidator] = async options => {
  return [];
};

registerPlugin('render', 'renderJSONData', renderJSONDataPlugin);

module.exports.renderJSONDataPlugin = renderJSONDataPlugin;
