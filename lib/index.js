var _ = require('underscore')
var assert = require('assert')
var AWS = require('aws-sdk')
var Caisson = require('caisson')
var Promise = require('bluebird')

var s3 = new AWS.S3()
Promise.promisifyAll(s3)

// public

module.exports = plugin

function plugin(options) {
    assert(_.isString(options.domain))
    assert(_.isObject(options.awsConfig))
    s3.config.update(options.awsConfig)
    return {
        up: function () {
            return s3.listBucketsAsync()
                .then(getStatusFromBucketList.bind(null, options.domain))
                .then(createBuckets)
        },
        status: function () {
            return s3.listBucketsAsync()
                .then(getStatusFromBucketList.bind(null, options.domain))
        },
        push: function () {},
        down: function () {}
    }
}

// private

function getStatusFromBucketList(domain, res) {
    var names = [domain, ('www.' + domain)]
    var isUp = (_.reject(res.Buckets, function(bucket){ return names.indexOf(bucket.Name) < 0 }).length === 2)
    if (isUp) return Caisson.STATUSES.up
    return Caisson.STATUSES.down
}

function createBuckets(status) {
    if (status === Caisson.STATUSES.up) return
    return Promise.all([
        createTargetBucket,
        createRedirectBucket
    ])
}

function createTargetBucket() {

}

function createRedirectBucket() {

}
