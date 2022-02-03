Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

function sumMix(x){

}

PREP
---
Parameters
Given an array of integers that are strings and numbers

Return
Return the sum of the array values if they were all numbers

Example
    assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 


Pseudocode
1. use .reduce method to add up all the numbers, convert the current values from string to integeres before adding them to the accumulator
  x.map(x => Number(x)).reduce((a,c) => a + c)
