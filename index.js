var request = require('sync-request');
var urlParse = require('url').parse;
var isImage = require('is-image');
var isUrl = require('is-url');

module.exports = function (url, accurate) {
  if (!url) return false;
  var http = url.lastIndexOf('http');
  if (http != -1) url = url.substring(http);
  if (!isUrl(url)) return isImage(url);
  var pathname = urlParse(url).pathname;
  if (!pathname) return false;
  var last = pathname.search(/[:?&]/);
  if (last != -1) pathname = pathname.substring(0, last);
  if (isImage(pathname)) return true;
  try {
    if (!accurate) return false;
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