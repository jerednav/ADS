Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){

}


PREP
 ---
Parameters 
- Given an array of numbers


Return
Sum of squared numbers in array


Example
[1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


Pseudocode
- Square each number in the array 
- then add all the squares together

numbers.reduce((a,c) => (a*2) + c


