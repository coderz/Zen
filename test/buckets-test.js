var zen    = require('../')
  , assert = require('assert');

zen.use();

describe('zen', function() {
  describe('#listBuckets()', function() {
    it('should return a list of buckets', function(done) {
      zen.listBuckets(function(err, buckets) {
        buckets.should.be.an.instanceOf(Array);
        done();
      });
    });
  });

  describe('#store()', function() {
    it('should save object if `key` is passed', function(done) {
      zen.store('cestone', 'heya', {lol: 'true'}, function(e,b) {
        assert.equal(null, e);
        done();
      });
    });
    it('should save object even if no `key` is passed', function(done) {
      zen.store('cestone', {lol: 'true'}, function(e,b) {
        console.log(b);
        assert.equal(null, e);
        done();
      });
    });
  });

  describe('#fetch()', function() {
    it('should fetch object from specified bucket', function(done) {
      zen.fetch('cestone', 'heya', function(e, i) {
        assert.equal(i.lol, 'true');
        done();
      });
    })
  });

});