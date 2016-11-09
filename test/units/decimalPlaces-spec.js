const expect = require('chai').expect
	, decimalPlaces = require('../../lib/custom_functions/decimalPlaces')



describe('decimalPlaces()', ()=>{
	it('20', ()=>{
		expect(decimalPlaces(20)).to.equal(0)
	})
	it('.05', ()=>{
		expect(decimalPlaces(.05)).to.equal(2)
		expect(decimalPlaces('.05')).to.equal(2)
	})

	it('.5', ()=>{
		expect(decimalPlaces(.5)).to.equal(1)
		expect(decimalPlaces('.5')).to.equal(1)
	})
	it('25e-100', ()=>{
		expect(decimalPlaces(25e-100)).to.equal(100)
		expect(decimalPlaces('25e-100')).to.equal(100)
	})
	it('2.5e-99', ()=>{
		expect(decimalPlaces(2.5e-99)).to.equal(100)
		expect(decimalPlaces('2.5e-99')).to.equal(100)
	})
	it('.5e1', ()=>{
		expect(decimalPlaces(.5e1)).to.equal(0)
		expect(decimalPlaces('.5e1')).to.equal(0)
	})
	it('.25e1', ()=>{
		expect(decimalPlaces(.25e1)).to.equal(1)
		expect(decimalPlaces('.25e1')).to.equal(1)
	})

})
