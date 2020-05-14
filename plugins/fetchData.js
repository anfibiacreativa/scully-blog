const {
  httpGetJson
} = require('@scullyio/scully');

// replace call to your url
const getData = httpGetJson('http://demo7107977.mockable.io/content/blog/entries')
.then(response => { 
  return response;
});;

module.exports = {
  GET_DATA: getData
};
