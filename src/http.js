const querystring = require("querystring");
const url = require('url');
const obj = querystring.parse('a=2&b=3');
const res = url.resolve('http://www.example.com/a/b/c', './one');
// console.log(obj);
console.log(res);
