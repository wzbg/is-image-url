var urlParse = require('url').parse;
var isImage = require('is-image');

module.exports = function (url) {
	return url ? isImage(urlParse(url).pathname) : false;
};