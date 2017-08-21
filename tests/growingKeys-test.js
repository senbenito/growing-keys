'use strict';

const expect = require('chai').expect; // jshint ignore:line
const assert = require('chai').assert; // jshint ignore:line
const lib = require('../growingKeys');
const emptyString = '';
const good2DResult = {"d": true, "dd": true};

describe('growingKeys', function() {

  it('should be a function', function() {
    assert.typeOf(lib.growingKeys, 'function', 'growingKeys is a function');
  });

  it('returns "invalid input" when number <= 0', function() {
    expect(lib.growingKeys(-1,'hello')).to.equal('invalid input');
    expect(lib.growingKeys(0,'hello')).to.equal('invalid input');
  });

  it('returns "invalid input" when given an empty string', function() {
    expect(lib.growingKeys(3,emptyString)).to.equal('invalid input');
  });

  it('returns an object when given valid inputs', function() {
    assert.typeOf(lib.growingKeys(2,'d'), 'object', 'growingKeys outputs an object');
    expect(lib.growingKeys(2,'d')).to.equal(good2DResult);
  });



});
