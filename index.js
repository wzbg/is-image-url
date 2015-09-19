var urlParse = require('url').parse;
var isImage = require('is-image');

module.exports = function (url) {
  if (!url) return false;
  var pathname = urlParse(url).pathname;
  if (!pathname) return false;
  var imagename = pathname.substring(pathname.lastIndexOf('/') + 1);
  if (!imagename) return false;
  return isImage(imagename.split(':')[0]);
};