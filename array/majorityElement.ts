
function majorityElement(nums: number[]): number {
    const numMap = new Map<number, number>()

    for (let num of nums) {
        numMap.set(num, (numMap.has(num) ? numMap.get(num) + 1 : 1))
    }

    let max = 0
    let final = 0

    for (let [key, val] of numMap) {
        if (val > max) {
            max = val
            final = key
        }

    }

    return final

};
