const {
  registerPlugin,
  configValidator
} = require('@scullyio/scully');

const data = require('./fetchData');

/* async function Plugin(html, route) {
  console.log('route tested', route);
  return Promise.resolve(html);
}
 */
async function getEntryDataPlugin (route, html) {
  let entries = [];
  data.GET_DATA.then((response) => {
    console.log(response, '###response');
    entries = Object.keys(entries);
    console.log(response, '###whatthehell');
    const entryTitle = entries.filter(entry => entry.title === html.route);
    const body = '</body>';
    const [begin, end] = body.split(body);
    const title = `<h2>${entryTitle}</h2>`;
    return Promise.resolve(`${begin}${title}${body}${end}
    `);
  });
/*   console.log(html);
  // return Promise.resolve(html);
  */
}

getEntryDataPlugin[configValidator] = async options => {
  return [];
};

registerPlugin('render', 'dataFetch', getEntryDataPlugin);

module.exports.getEntryDataPlugin = getEntryDataPlugin;