var urlParse = require('url').parse;
var isImage = require('is-image');

module.exports = function (url) {
  if (!url) return false;
  var pathname = urlParse(url).pathname;
  if (!pathname) return false;
  return isImage(pathname.split(':')[0]);
};