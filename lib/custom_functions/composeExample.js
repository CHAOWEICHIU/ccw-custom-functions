module.exports = (...fns)=>(x)=>fns.reduce((acc,curr)=>curr(acc),x)




/*  
Original 

module.exports = function(...fns){
	return function(x){
		return fns.reduce((acc, curr)=>{
			return curr(acc)
		}, x)
	}
}
*/
