# renderable-html
A tiny html file cache module, based on renderable & htmlize, under the MIT licence

## Install
`npm install renderable-html`

## Requirements
Since the ES2015 Proxy isn't actually supported, this module requires to start your app with a `--harmony_proxies` flag

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