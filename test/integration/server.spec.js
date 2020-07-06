const assert = require("assert")
let chai = require("chai")
let chaiHttp = require("chai-http")
let should = chai.should()
const { expect } = require('chai'),
    geo = require('../../server/utils/geo')

chai.use(chaiHttp)

describe('Testing Server-side APIs', function() {
    it ("Happy-Path for Copy Endpoint (AWS S3)", (done)=>{
        chai.request('http://localhost:3001')
            .get("/copy")
            .end((err, result)=>{
                const text = JSON.parse(result.text)
                
                expect(text).to.be.an('object')
                expect(text).to.include({ 'firstname': 'Jason' })
                done()
        })
    })

    // it ("Happy-Path for Copy Endpoint (AWS S3)", (done)=>{
    //     chai.request('http://localhost:3001')
    //         .get("/copy")
    //         .end((err, result)=>{
    //             const text = JSON.parse(result.text)
                
    //             expect(text).to.be.an('object')
    //             expect(text).to.include({ 'firstname': 'Jason' })
    //             done()
    //     })
    // })
})