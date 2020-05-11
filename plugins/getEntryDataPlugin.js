const {
  registerPlugin,
  configValidator,
  httpGetJson
} = require('@scullyio/scully');

/* async function Plugin(html, route) {
  console.log('route tested', route);
  return Promise.resolve(html);
}
 */

async function getEntryDataPlugin (route, html) {
  const entriesData = httpGetJson('https://api3.angular-buch.com/books')
  .then((response) => 
    response.map(entry => {
      return {
        route,
        title: entry.title,
        description: entry.description
      }
    })
  ).catch(err => console.error('Error:', err));
/*   console.log(html);
  // return Promise.resolve(html);
  const body = '</body>';
  const [begin, end] = html.split(body);
  const title = `<h2>The Truth Is Out There!</h2>`;
  return Promise.resolve(`${begin}${title}${body}${end}
  `) */
  
}

getEntryDataPlugin[configValidator] = async options => {
  return [];
};

registerPlugin('render', 'dataFetch', getEntryDataPlugin);

module.exports.getEntryDataPlugin = getEntryDataPlugin;