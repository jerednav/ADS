In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!

function solve(arr) {
  return 0;
};
  
PREP
---
Parameters
  Given an array of arrays
  
Return
  Return the number of unique arrays that can be formed by picking exactly one element from each subarray

Example
   Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
    Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
    Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
    Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);
      
 Pseudocode
 - Map through each sub array to find the unique arrays
   arr.map(x => ?)
 - x in the above example will be the sub array, so we will use Set and x (which are the numbers inside the array) 
- arr.map (x => (...new Set(x))
           -Set is basically an array but it gets rid of the duplicates
 - When we map through the sets, we will end up with unique numbers inside each subarray.
 - We will then use reduce function to figure out how many unique numbers are in the subarray
 
           
ANSWER           
const solve = arr => arr.map(x => [...new Set(x)].length).reduce((a,c) => a*c )
