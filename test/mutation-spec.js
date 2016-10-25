const expect = require('chai').expect


function mutation(arr) {
  var first = arr[0].toLowerCase()
  var second = arr[1].toLowerCase().split('')
  for(var i = 0; i < second.length; i++){
  	if(first.indexOf(second[i])===-1)return false
  }
  return true
}






describe('slasher()', ()=>{
	it('eqation check', ()=>{
		expect(mutation(["hello", "hey"])).to.equal(false)
		expect(mutation(["hello", "Hello"])).to.equal(true)
		expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).to.equal(true)
		expect(mutation(["Mary", "Army"])).to.equal(true)
		expect(mutation(["Mary", "Aarmy"])).to.equal(true)
		expect(mutation(["Alien", "line"])).to.equal(true)
		expect(mutation(["floor", "for"])).to.equal(true)
	})
})

