const expect = require('chai').expect
	, filterWords = require('../../lib/custom_functions/filterWords-curry')
	, _ = require('lodash')

let curriedFilterWords = _.curry(filterWords)

describe('curry', ()=>{
	
	describe('case 1', ()=>{
		let wordsToRemove,removeIsAOf

		before(()=>{
			wordsToRemove = ['is', 'a', 'of']
			removeIsAOf = curriedFilterWords(wordsToRemove)
		})

		it('remove One', ()=>{
			expect(removeIsAOf('I am a person')).to.equal('I am person')
		})

		it('remove multiple', ()=>{
			let inputArray = [
				'I am a person',
				'this is a test of rocks'
			]
			let outputArray = [
				'I am person',
				'this test rocks'
			]
			expect(inputArray.map(removeIsAOf)).to.eql(outputArray)
		})	
	})

	describe(('case 2'), ()=>{
		let wordsToRemove, removeCurseWords
		before(()=>{
			wordsToRemove = ['fuck', 'fucking', 'shit']
			removeCurseWords = curriedFilterWords(wordsToRemove)
		})
		it('remove one', ()=>{
			let input = 'I fucking love you'
			let output = 'I love you'
			expect(removeCurseWords(input)).to.equal(output)
		})
		it('remove multiple', ()=>{
			let inputArray = [
				'are you fucking kidding me?',
				'bull shit'
			]
			let outputArray = [
				'are you kidding me?',
				'bull'
			]
			expect(inputArray.map(removeCurseWords)).to.eql(outputArray)
		})
	})
	
})







