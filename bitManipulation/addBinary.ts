// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a: string, b: string): string {
    let carry = 0
    let res = ''

    let i = a.length - 1
    let j = b.length - 1

    while (i >= 0 || j >= 0) {
        let digitA = (i >= 0) ? parseInt(a[i]) : 0
        let digitB = (j >= 0) ? parseInt(b[j]) : 0

        let total = digitA + digitB + carry

        res = total % 2 + res

        carry = Math.floor(total / 2)

        i--
        j--
    }

    if (carry > 0) {
        res = carry + res
    }

    return res

};