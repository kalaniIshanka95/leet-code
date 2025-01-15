//283. Move Zeroes
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in -place without making a copy of the array.


// Input: nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Input: nums = [0]
// Output: [0]

function moveZeroes(nums: number[]): void {

    let j = 0
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j++
        }

    }

    while (j < nums.length) {
        nums[j] = 0
        j++
    }

};