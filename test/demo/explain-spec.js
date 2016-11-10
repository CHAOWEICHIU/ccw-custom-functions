const expect = require('chai').expect
	, _ = require('lodash')









describe('thing()',()=>{
	it('pass', ()=>{
		let add = ( a, b ) => a + ' ' + b; // has an arity of 2


		let curriedAdd = _.curry( add ); // returns a curried function
		let first = curriedAdd( 'first' ); // add was partially applied
		
		// the curriedAdd( 'first' ) call will return a new function that looks like this
		// b => 'first' + b;
		
		expect(first('second')).to.equal('first second')

	})
})