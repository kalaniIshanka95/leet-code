/*
Given an integer array nums, return an array answer such that answer[i] is equal to

the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

function productExceptSelf(nums: number[]): number[] {

    const numbers: number[] = new Array(nums.length)
    const left: number[] = new Array(nums.length)
    const right: number[] = new Array(nums.length)


    left[0] = 1
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }

    right[nums.length - 1] = 1


    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]

    }


    for (let i = 0; i < nums.length; i++) {
        numbers[i] = left[i] * right[i]

    }

    return numbers

};