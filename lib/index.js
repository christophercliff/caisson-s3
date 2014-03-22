//var _ = require('underscore')
//var AWS = require('aws-sdk')
var Promise = require('bluebird')

module.exports = function () {
    return {
        up: up,
        down: down,
        push: push
    }
}

function up(caisson, callback) {
    //var s3 = new AWS.S3({})
    return series([
        createBucket,
        createBucket
    ]).nodeify(callback)
}

function down() {

}

function push() {

}

// private

function series(fns) {
    return Promise.reduce(fns, function(previous, current){
        if (!previous) return current()
        return previous.then(current)
    }, null)
}

function createBucket() {
    return verifyBucket()
        .then(putBucket)
}

function verifyBucket() {
    return new Promise(function(resolve){
        process.nextTick(function(){
            return resolve()
        })
    })
}

function putBucket() {
    return new Promise(function(resolve){
        process.nextTick(function(){
            return resolve()
        })
    })
}

/*function destroyBucket() {
    return new Promise(function(resolve){
        process.nextTick(function(){
            return resolve()
        })
    })
}*/
