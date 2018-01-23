const request=require('request');
//var chai=require('chai');
var expect  = require('chai').expect;
describe('Add', () => {
    it('details posted',function(){
        return chai.request(server)
        .post('/server.js')
        .then(function(res){
            expect(res).to.have.status(200);
        })
    })
})