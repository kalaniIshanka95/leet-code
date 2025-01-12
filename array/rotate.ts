/**
 Do not return anything, modify nums in-place instead.
 */

//optimized solution
function rotate(nums: number[], k: number): void {
    k = k % nums.length
    reverse(nums, 0, nums.length - 1)

    reverse(nums, 0, k - 1)

    reverse(nums, k, nums.length - 1)
}


function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }

}




// function rotate(nums: number[], k: number): void {
//     k = k % nums.length
//     const array: number[] = []
//     let i = Math.floor(nums.length - k)
//     let j = 0
//     while (j < k) {
//         array[j] = nums[i]
//         i++
//         j++

//     }

//     let y = j
//     let x = 0
//     while (y < nums.length) {
//         array[y] = nums[x]
//         y++
//         x++
//     }

//     nums.length = 0
//     nums.push(...array)
// }