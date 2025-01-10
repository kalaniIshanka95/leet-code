/*Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
ans[i] is the number of 1's in the binary representation of i.

*/

function countBits(n: number): number[] {
    const arr: number[] = []

    for (let i = 0; i <= n; i++) {
        let count = 0
        let num = i
        while (num > 0) {
            count += num % 2

            num = Math.floor(num / 2)
        }

        arr.push(count)
    }
    return arr

};
