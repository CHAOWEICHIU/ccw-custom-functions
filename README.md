# Custom Functions Library 

## Why?
As a professional programmer, there are cases that would build your own custom functions to handle certain situation across different projects. We want our custom function to act the way we expected to act. Therefore, I have written tests to back it up. Feel free to write more test to make it fail!!!! 

## functional programming style
 
**Benefit?**

1. resuseble

2. easy to maintain

3. east to test

4. simple mental model

5. app can be scale horizontally 

**Why?**

1. stateless

2. pure 

3. no side effect

## Functional programming libraries

- [underscore](http://underscorejs.org/)

- [lodash](https://lodash.com/)

- [ramda](http://ramdajs.com/)

## Build-in javascript verbs

- slice()

 - Remove items
 
 - [1,2,3].slice(1, 2) -> [2]

- concat()

 - Combine things together

 - [1,2].concat.([3,4]) -> [1,2,3,4]

- map()

 - Transform each item

 - [1,2].map((num)=>num*num) -> [1,4]

- filter()

 - Remove items

 - [1,2,3,4].filter((num)=>num%2===0) -> [2,4]

 - ['apple pei','apple cider','apple-pei','not show'].filter((item)=>/apple/i.test(item)) -> ['apple pei','apple cider','apple-pei']


## TEST ! 
- npm test
- In order to show the evidence, please write your own test as well to see if those custom functions would act the way that you expect to do. ^_^ 

## Functions

- compose()

 - see how you can use this magic at /test/units/composeExample-spec.js

- splitArrayEvery()

 - (2, [1,2,3,4]) -> [[1,2],[3,4]]

 - (3, [1,2,3,4]) -> [[1,2,3],[4]]

- toTitleCase()

  - "how are you" -> "How Are You"

- confirmEnding()
 
 - ("Good morning", "g") -> true

 - ("Open sesame", "same") -> true

- plus()

 - (2, 3, 5) -> 10
 
 - (5, 5, 5) -> 15

 - (10,10,10, 5) -> 35

- repeatStringNumTimes()

 - ("ab", 2) -> ''abab"
 
 - ("@#", 3) -> "@#@#@#"

- removeCurseWords()

 - ('I fucking love you') -> 'I love you'

 - this is a curry version of filter, please see /tests/units/filterWords-curry-spec.js for how you can use this

- palindrome()

 - "eye" -> true

 - "race car" -> true

 - "A man, a plan, a canal. Panama" -> true

- factorialize()

 - (4) -> 1 x 2 x 3 x 4 -> 24

 - (2) -> 1 x 2 -> 2

- findLongestWord()

 - "May the force be with you" -> 5

 - "How are you doing" -> 5

 - "Yo Hey" -> 3

- truncateString()

 - ("how are you", 2) -> ho ...

 - ("how are you", 5) -> how a ...

- getIndexOfInt()
 
 - ([10, 20, 30, 40, 50], 30)) -> 2

 - ([2, 5, 10], 15)) -> 3

 - ([40, 60], 50)) -> 1

- falsyRemover()

 - ([7, "ate", "", false, 9]) -> [7, "ate", 9]

 - [false, null, 0, NaN, undefined, ""] -> [ ]

- mutation()
 
 - ["floor", "for"] -> true

 - ["hello", "hey"] -> false

- validZipcode()

 - (48326) -> true

 - (a4104) -> false

 - (12s) -> false

- zip()

 - ([1,2,3], [2,3]) -> [1,2,3,2,3]

 - (['a',2,3], [2,'3', false]) -> ['a',2,3,2,'3',false]

