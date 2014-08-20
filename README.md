Browserify gulper plugin
===================

A [gulper](https://github.com/PaulAvery/node-gulper) plugin to include your CommonJS style modules via browserify:

``` js
var browserify = require('gulper-browserify');
var gulper = new require('gulper')(config)

gulper.plugin(browserify(index, glob));
```