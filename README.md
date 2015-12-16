# is-image-url

> Check if a url is an image


## Install

```
$ npm install --save is-image-url
```


## Usage

```js
const isImageUrl = require('is-image-url');

isImageUrl('https://timedotcom.files.wordpress.com/2015/08/gettyimages-482708894.jpg?quality=65&strip=color&w=1100');
//=> true

isImageUrl('http://time.com/3981644/hong-kong-breast-assault-protest/');
//=> false
```


## Related

- [`is-url`](https://www.npmjs.com/package/is-url) - Check whether a string is a URL
- [`is-image`](https://www.npmjs.com/package/is-image) - Check if a filepath is an image
- [`sync-request`](https://www.npmjs.com/package/sync-request) - Make synchronous web requests
- [`url`](https://www.npmjs.com/package/url) - The core url packaged standalone for use with Browserify

## License

The MIT License (MIT)

Copyright (c) 2015 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
