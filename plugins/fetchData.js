const {
  httpGetJson
} = require('@scullyio/scully');

let r = [];
const getData = httpGetJson('http://demo7107977.mockable.io/content/blog/entries')
.then(response => { 
  console.log(response, '#### this is the response ####');
  return response;
});;

module.exports = {
  GET_DATA: getData
};
