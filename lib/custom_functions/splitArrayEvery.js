module.exports = function(chunkSize, arr){
	return arr.reduce((acc,curr,i)=>{
		let index = Math.floor(i/chunkSize)
		acc[index] = (acc[index]||[]).concat(curr)
		return acc
	},[])	
}