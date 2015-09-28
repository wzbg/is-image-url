var request = require('sync-request');
var urlParse = require('url').parse;
var isImage = require('is-image');
var isUrl = require('is-url');

module.exports = function (url) {
  if (!url) return false;
  if (!isUrl(url)) return false;
  var pathname = urlParse(url).pathname;
  if (!pathname) return false;
  if (isImage(pathname.split(':')[0])) {
    return true;
  }
  try {
    var res = request('GET', url);
    if (!res) return false;
    var headers = res.headers;
    if (!headers) return false;
    var contentType = headers['content-type'];
    if (!contentType) return false;
    return contentType.search(/^image\//) != -1;
  } catch (e) {
    return false;
  }
};