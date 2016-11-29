const expect = require('chai').expect
    , translate = require('../../lib/custom_functions/googleTranslate')

describe('google translate', ()=>{
  it('pass', (done)=>{
    let words = ['apple', 'orange']
    translate(words, (words)=>{
      expect(words.length).to.equal(2)
      done()
    })
  })
})
