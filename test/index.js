var Caisson = require('caisson')
var s3 = require('../')

describe('caisson-s3', function(){

    it('should run', function(done){
        var caisson = Caisson.create()
        caisson
            .use(s3({

            }))
            .up()
            .done(done)
    })

})
