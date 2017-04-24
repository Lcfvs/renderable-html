# renderable-html

[![npm](https://img.shields.io/npm/v/renderable-html.svg?style=plastic)]()
[![Downloads](https://img.shields.io/npm/dt/renderable-html.svg?style=plastic)]()

A tiny html file cache module, based on renderable & htmlize, under the MIT licence

## Install
`npm install renderable-html`

## Usage
```JS
var html;

html = require('renderable-html');
```

### html.register(htmlFilename)
```JS
// registers a single file, if needed
html.register(htmlFilename)
    .then(function() {
        console.log('registered');
    });

// registers all files matching a glob mask, if needed
// please refer to https://www.npmjs.com/package/glob
html.register(htmlGlobMask)
    .then(function() {
        console.log('registered');
    });
```

### html.render(htmlFilename)
```JS
// registers a single html file, if needed
// registers a renderer, based on filename & parser, if needed
// renders
html.render(htmlFilename)
    .then(function(document) {
        console.log(document.beautify());
    });
```
