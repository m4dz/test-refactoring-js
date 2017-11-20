/* eslint-env mocha */

var expect = require('chai').expect
var request = require('request')

it('Main page content', function () {
  request('http://localhost:3000', function (err, response, body) {
    if (err) console.error(err)

    console.log(body)
    expect(body).to.equal('Hello World')
  })
})
