const chai = require('chai');
const mocha = require('mocha');
const assert = require('assert');

//test app.get('/my-closet')
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

//test app.get('/my-outfits')
describe('GET MyOutfits', () => {
  it('it should GET MyOutfits.json', (done) => {
    chai.request(server)
        .get('/myoutfits.json')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('JSON');
              res.body.length.should.be.eql(0);
          done();
        });
  });
});

//test app.get('/try-on')
describe('GET TryOn', () => {
  it('it should GET TryOn.json', (done) => {
    chai.request(server)
        .get('/tryon.json')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('JSON');
              res.body.length.should.be.eql(0);
          done();
        });
  });
});

//test app.get('/my-mannequin')
describe('GET MyMannequin', () => {
  it('it should GET MyMannequin.json', (done) => {
    chai.request(server)
        .get('/mymannequin.json')
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
