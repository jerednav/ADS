Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104


PREP

Parameters
Given an array, nums

Return
Return contiguous subarray with largest sum

Example
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Pseudocode
1. Create max variable equal to nums[0]
2. Create sum variable equal to 0
3. Loop through array, nums
4. Create if statement, if sum < 0; sum = 0
5. If not, add the sum to the num
6. Create max variable with Math.max(sum, max)
7. Return max or sum, whichever is higher


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let sum = 0
        
    for (let num of nums) {
        if (sum < 0) sum = 0;
        
        sum += num
        
        max = Math.max(sum, max)
    }
    return max
};

