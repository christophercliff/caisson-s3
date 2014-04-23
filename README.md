# caisson-s3

## An AWS S3 plugin for Caisson

Provisions the necessary AWS S3 buckets and pushes the build directory.

## Installation

```
$ npm install caisson-s3
```

## Usage

```js
var caisson = require('caisson').create()
var s3 = require('caisson-s3')

caisson
    .use(s3(options))
    .up()
    .then(caisson.push)
    .done(done)
```

### Options

- **`awsConfig`** `Object awsConfig`

    An object containing your AWS configuration, passed along to `s3.config.update(awsConfig)`. Required.

- **`domain`** `String domain`

    The domain used for naming the S3 buckets. Required.

## Tests

Tests require a file `./test/aws-config.json` with your AWS credentials.

```
$ npm test
```

## License

MIT License, see [LICENSE][license] for details.

[#]: #
[license]: https://github.com/christophercliff/caisson-s3/blob/master/LICENSE.md
