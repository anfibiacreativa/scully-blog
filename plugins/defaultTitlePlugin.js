const { registerPlugin } = require('@scullyio/scully');

function defaultTitlePlugin(html, route) {
  // If no title in the document
  const splitter = '</head>';
  const [begin, end] = html.split(splitter);
  const defaultTitle = `<title>The Truth Is Out There!</title>`;
  return Promise.resolve(`${begin}${defaultTitle}${splitter}${end}`);
  return Promise.resolve(html);
}

// DON NOT FORGET REGISTER THE PLUGIN
const validator = async conf => [];
registerPlugin('render', 'defaultTitle', defaultTitlePlugin, validator);

module.exports.defaultTitlePlugin = defaultTitlePlugin;
