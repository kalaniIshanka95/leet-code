
/*Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
*/


function firstMissingPositive(nums: number[]): number {
    const range = nums.length
    const numSet = new Set(nums)
    for (let i = 1; i <= range; i++) {
        if (!numSet.has(i)) {
            return i

        }
    }

    return nums.length + 1
};