module.exports = (wordsToRemove, string)=>{
	return string
				.split(' ')
			  	.filter((word)=>{
			  		if(wordsToRemove.indexOf(word)==-1)return true
					return false
				})
				.join(' ')
}
