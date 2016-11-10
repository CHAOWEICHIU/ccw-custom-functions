module.exports = (fromName, toName, input)=>{
	let fName = fromName.charAt(0).toLowerCase()
	  , tName = toName.charAt(0).toLowerCase()
	  , switchCaseString = `from ${fName} to ${tName}`
	
	switch(switchCaseString){
		case'from k to c':
			return toFixedFuc( (input) - 273.15 )
		case 'from c to k':
			return toFixedFuc( (input) + 273.15 )
		case 'from k to f':
			return toFixedFuc( (input) * (9/5) - 459.67 )
		case 'from f to k':
			return toFixedFuc( (input+459.67) * (5/9) )
		case 'from f to c':
			return toFixedFuc( (input-32) * (5/9) )
		case 'from c to f':
			return toFixedFuc( (input) * (9/5) + 32 )
		case'from k to k':
			return input
		case'from f to f':
			return input
		case'from c to c':
			return input
		default:
			return 0
	}

	function toFixedFuc(convertedNum){
		return parseInt((convertedNum).toFixed(0))
	}
	
}