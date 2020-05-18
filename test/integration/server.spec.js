var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
// let server = require("../../server/server");
let should = chai.should();
chai.use(chaiHttp);

it ("Should Fecth all the Home", (done)=>{
    // const tempServer = await getServer()

    chai.request('http://localhost:3000')
        .get("/")
        .end((err, result)=>{
            // result.should.have.status(200);
            console.log ("Got",result, " docs")
            //console.log ("Result Body:", result.body);
            
            done()
    })
})