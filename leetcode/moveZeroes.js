Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
 
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
Input: nums = [0]
Output: [0]
 
Constraints:
* 1 <= nums.length <= 104
* -231 <= nums[i] <= 231 - 1
 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
var moveZeroes = function(nums) {
    let nonZeroIndex = 0
    
    for (let i = 0; i < nums.length)
    
};


Pseudocode
1. Declare variable to keep track of the index that is not 0
2. Loop through the array to find the non zero elements
3. If it is non zero element, you add the element to the index of nonzero index, then increment the nonzero index counter
4. Once we find all the non zero numbers, we loop through the remainder of the array and add them as 0

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i]
            nonZeroIndex++
        }
    }
    
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0
    }
    
};


