In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
  
  
PREP
---
  
Parameters
Given an array of numbers, where two numbers occur once and the rest occur only twice

Return
Return the sum of the two numbers that only occur once

Example
Test.assertEquals(repeats([4,5,7,5,4,8]),15);
Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

Pseudocode
1. Filter through the array
2. Use .indexOf, to return the index within the calling String object of the first occurence of the specified valuee
3. Add the sum of the two integers using .reduce method

function repeats(arr){
  return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a,c) => a + c)
};
