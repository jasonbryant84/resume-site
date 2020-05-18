const mocha = require('mocha'),
    chai = require('chai'),
    expect = chai.expect,
    path = require('path'),
    assert = require('assert'),
    request = require('supertest')

describe('Pages are alive and well', function() {
    it('respond with json containing a list of all users', function (done) {
        request('http://localhost:3000')
            .get('/')
            .expect(200, done);
    });
});