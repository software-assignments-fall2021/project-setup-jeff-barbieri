const chai = require('chai');
const mocha = require('mocha');
const assert = require('assert');

describe('GET MyCloset', () => {
  it('it should GET MyCloset.json', (done) => {
    chai.request(server)
        .get('/mycloset.json')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('JSON');
              res.body.length.should.be.eql(0);
          done();
        });
  });
});

/*describe('JSON', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the object is empty', function() {
        assert.equal(app.get(tryon).indexOf(0), -1);
      });
    });
  });*/

