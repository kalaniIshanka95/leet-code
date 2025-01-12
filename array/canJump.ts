/*
55. Jump Game
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

function canJump(nums: number[]): boolean {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        let steps = nums[i]

        if (i > j) {
            return false
        }

        j = Math.max(j, steps + i)

        if (j >= nums.length - 1) {
            return true
        }
    }

    return false
};