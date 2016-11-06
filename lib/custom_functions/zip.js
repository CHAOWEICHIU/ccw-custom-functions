module.exports = function(){
	return Array.from(arguments).reduce((acc, cur)=>acc.concat(cur),[])

}