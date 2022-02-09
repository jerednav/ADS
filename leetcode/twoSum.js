Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

PREP
—-

Parameters
Given an array of integers, num and an integer target

Return
Return indices of the two numbers such that they add up to target

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Pseudocode
1. Approach 1 - Brute Force
    1. Loop through each element of x and find if there is a value that equals to target - x 
class solution {
	for (int = 0; I < nums.length; I++) {
		for ( int j = I + 1; j < nums.length; j++) {
			if (nums[j[ == target - nums[I] ) {
				return new int[] ( I, j );
			}
		}
	}
}


Complexity Analysis
	Time Complexity: O (n2). For each element, we try to find its complement by looping through the rest of the array which takes O(n) time. Therefore, the time complexity is O(n2).
	Space complexity: O(1). The space required does not depend on the size of the input array so only constant space is used.
