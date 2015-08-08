var isImage = require('is-image');
var url = require('url');

module.exports = function (urlStr) {
	return urlStr ? isImage(url.parse(urlStr).pathname) : false;
};