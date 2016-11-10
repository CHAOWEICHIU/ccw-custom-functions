const expect = require('chai').expect
	, tempConverter = require('../../lib/custom_functions/tempConverter')
	, tempConverterAPI = require('../../lib/custom_functions/tempConverterAPI')


describe('temperatureConverter()',()=>{
	let input, output
	it('from and to are same', ()=>{
		expect(tempConverterAPI.value(20).from('k').to('k').done()).to.equal(20)
		expect(tempConverterAPI.value(20).from('f').to('f').done()).to.equal(20)
		expect(tempConverterAPI.value(20).from('c').to('c').done()).to.equal(20)	
	})
	it('K -> F', ()=>{
		input = tempConverterAPI.value(271).from('k').to('f').done()
		output = 28
		expect(input).to.equal(output)
	})
})


describe('Kelvin Converter', ()=>{
	let input, output
	it('tempConverter K->C', ()=>{
		input = 223
		output = -50
		expect(tempConverter('K','c', input)).to.equal(output)
	})
	it('tempConverter C->K', ()=>{
		input = -50
		output = 223
		expect(tempConverter('c','k', input)).to.equal(output)
	})
	it('tempConverter K->F', ()=>{
		input = 280
		output = 44
		expect(tempConverter('k','f', input)).to.equal(output)	
	})
	it('tempConverter F->K', ()=>{
		input = 44
		output = 280
		expect(tempConverter('f','k', input)).to.equal(output)		
	})
	it('tempConverter F->C', ()=>{
		input = 68
		output = 20
		expect(tempConverter('f','c', input)).to.equal(output)			
	})
	it('tempConverter C->F', ()=>{
		input = 20
		output = 68
		expect(tempConverter('c','f', input)).to.equal(output)
	})
})