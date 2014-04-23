var Caisson = require('caisson')
var s3 = require('../')

var AWS_CONFIG = require('./aws-config.json')

describe('caisson-s3', function(){

    it('should run', function(done){
        var caisson = Caisson.create()
        caisson
            .use(s3({
                awsConfig: AWS_CONFIG,
                domain: 'caisson.test'
            }))
            .status()
            .then(function(status){ status.should.equal(Caisson.STATUSES.down) })
            .then(caisson.up)
            .then(caisson.status)
            .then(function(status){ status.should.equal(Caisson.STATUSES.up) })
            .done(done)
    })

})
