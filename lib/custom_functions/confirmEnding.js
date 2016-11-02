module.exports = function confirmEnding(str, target) {
  var strLength = str.length
  var targetLength = target.length
  var result = str.substr(strLength - targetLength, targetLength)
  if(result === target)return true
  return false
}