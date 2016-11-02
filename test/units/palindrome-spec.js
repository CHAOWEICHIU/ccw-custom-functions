const expect = require('chai').expect
	, palindrome = require('../../lib/custom_functions/palindrome')

describe('palindrome', ()=>{
	it('should pass', ()=>{
		expect(palindrome('eye')).to.equal(true)
		expect(palindrome('_eye')).to.equal(true)
		expect(palindrome("race car")).to.equal(true)
		expect(palindrome("not a palindrome")).to.equal(false)
		expect(palindrome("A man, a plan, a canal. Panama")).to.equal(true)
		expect(palindrome("My age is 0, 0 si ega ym.")).to.equal(true)
		expect(palindrome("1 eye for of 1 eye.")).to.equal(false)
		expect(palindrome("0_0 (: /-\ :) 0-0")).to.equal(true)
		expect(palindrome("five|\_/|four")).to.equal(false)
	})
})
