function removeDuplicatesII(nums: number[]): number {

    let j = 2

    // start from third element because first two elemnts of and sorted array is alredy unique
    for (let i = 2; i < nums.length; i++) {
        if (nums[i - 2] !== nums[i]) {
            nums[j] = nums[i]
            j++

        }

    }

    return j

};