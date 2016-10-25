const expect = require('chai').expect



function truncateString(str, num) {
  	
  	if(str.length === num) return str
	if(str.length < num) return str
  	var cutIndex = num < 3 ? num : num - 3
  
  	var result = str.substring(0, cutIndex)
  
  return result + '...'
}


describe('truncateString()', ()=>{
	it('equation check', ()=>{
		expect(truncateString("A-tisket a-tasket A green and yellow basket", 11)).to.equal('A-tisket...')
		expect(truncateString("Peter Piper picked a peck of pickled peppers", 14)).to.equal('Peter Piper...')
		expect(truncateString('Absolutely Longer', 2)).to.equal('Ab...')
	})
	it('should return full str if str.length === num', ()=>{
		expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)).to.equal('A-tisket a-tasket A green and yellow basket')
		expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)).to.equal('A-tisket a-tasket A green and yellow basket')
	})
	it('special', ()=>{
		expect(truncateString("A-", 1)).to.equal('A...')
	})
})


