const assert = require("assert")
let chai = require("chai")
let chaiHttp = require("chai-http")
let should = chai.should()
const { expect } = require('chai')

chai.use(chaiHttp)

describe('Pages are alive and well', function() {
    it ("Homepage is healthy", (done)=>{
        chai.request('http://localhost:3001')
            .get("/")
            .end((err, result)=>{
                expect(result).to.have.status(200)
                done()
        })
    })

    it ("About Page is healthy", (done)=>{
        chai.request('http://localhost:3001')
            .get("/about")
            .end((err, result)=>{
                expect(result).to.have.status(200)
                done()
        })
    })
})