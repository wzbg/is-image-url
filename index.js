'use strict';

const request = require('sync-request');
const urlParse = require('url').parse;
const isImage = require('is-image');
const isUrl = require('is-url');

module.exports = (url, accurate, timeout) => {
  if (!url) return false;
  const http = url.lastIndexOf('http');
  if (http != -1) url = url.substring(http);
  if (!isUrl(url)) return isImage(url);
  let pathname = urlParse(url).pathname;
  if (!pathname) return false;
  const last = pathname.search(/[:?&]/);
  if (last != -1) pathname = pathname.substring(0, last);
  if (isImage(pathname)) return true;
  if (/styles/i.test(pathname)) return false;
  try {
    if (!accurate) return false;
    if (!timeout) timeout = 60000;
    const res = request('GET', url, { timeout });
    if (!res) return false;
    const headers = res.headers;
    if (!headers) return false;
    const contentType = headers['content-type'];
    if (!contentType) return false;
    return contentType.search(/^image\//) != -1;
  } catch (e) {
    return false;
  }
};