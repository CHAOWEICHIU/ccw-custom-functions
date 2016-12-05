const expect = require('chai').expect
const lastWord = require('../../lib/custom_functions/lastWord')


describe('lastWrod', ()=>{
  it('word', ()=>{
    expect(lastWord('good')).to.equal('d')
  })
  it('int', ()=>{

    expect(lastWord(222333)).to.equal(3)
  })
})
