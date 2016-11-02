module.exports = function falsyRemover(arr) {
  return arr.filter((item)=>{
  	return Boolean(item) !== false
  })
}