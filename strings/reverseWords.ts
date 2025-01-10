/**
 * Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words.
The returned string should only have a single space separating the words. Do not include any extra spaces.
 */

function reverseWords(s: string): string {
    let i = 0
    let n = s.length
    let result: string[] = []

    while (i < n) {
        while (i < n && s[i] === ' ') {
            i++
        }

        if (i >= n) {
            break
        }

        let j = i + 1

        while (j < n && s[j] !== ' ') {
            j++
        }


        let sub = s.substring(i, j)

        result.push(sub)

        i = j + 1

    }

    return result.reverse().join("")
};