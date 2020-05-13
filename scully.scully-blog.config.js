require('./plugins/getEntryDataPlugin');

exports.config = {
  projectRoot: "./src",
  projectName: "scully-blog",
  outDir: './dist/static',
  defaultRenderers:'renderData',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/entries/:title': {
      type: 'json',
      title: {
        url: 'http://demo7107977.mockable.io/content/blog/entries',
        property: 'title'
      },
      defaultRenderers: 'fecthData'
    }
  }
};