module.exports = function findLongestWord(str) {
  var lengthForEachWord = str.split(' ')
  				.map((word)=>{
  					return word.split('').length;
  				});
  return Math.max.apply(null, lengthForEachWord);
}