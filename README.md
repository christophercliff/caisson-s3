# caisson-s3

## An AWS S3 plugin for Caisson

Provisions an AWS S3 bucket and pushes the build directory to it.

## Usage

Provisioning operations are bundled into plugins and can be mixed and matched as needed. For example, you can provision an S3 bucket and upload your build directory:

```js
var caisson = require('caisson').create()
var s3 = require('caisson-s3')

caisson
    .use(s3({

    }))
    .up()
    .then(caisson.push)
    .done(done)
```

## Installation

Install with npm:

```
$ npm install caisson-s3
```

## Tests

```
$ npm test
```

## License

MIT License, see [LICENSE][license] for details.

[#]: #
[license]: https://github.com/christophercliff/caisson-s3/blob/master/LICENSE.md
