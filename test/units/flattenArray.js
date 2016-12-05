const expect = require('chai').expect
const flattenArray = require('../../lib/custom_functions/flattenArray')

describe('array', ()=>{
  let input, output
  beforeEach(()=>{
    input = ''
    output = ''
  })
  it('test (1)', ()=>{
    input = [1,2,3,[4]]
    output = [1,2,3,4]
    expect(flattenArray(input)).to.eql(output)
  })
  it('test (2)', ()=>{
    input = [[1,2,[3, [4]],[5,[5,1,5,[4]],5]],4]
    output = [ 1, 2, 3, 4, 5, 5, 1, 5, 4, 5, 4 ]
    expect(flattenArray(input)).to.eql(output)
  })
  it('test (3)', ()=>{
    input = [[[0], [1]], [[2], [3]], [[4], [5]]]
    output = [0,1,2,3,4,5]
    expect(flattenArray(input)).to.eql(output)
  })
})
