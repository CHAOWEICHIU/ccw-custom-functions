module.exports = function(){
	let container = []
	let items = Array.from(arguments).forEach((things)=>{
		things.forEach((i)=>container.push(i))
	})
	return container	
}