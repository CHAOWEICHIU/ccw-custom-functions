function flattenArray(){
  const input = arguments[0]
    , output = flatten(input)
  function flatten(){
    return [].concat.apply([], arguments[0])
  }
  return input.length === output.length
    ? output
    : flattenArray(output)
}

module.exports = flattenArray
