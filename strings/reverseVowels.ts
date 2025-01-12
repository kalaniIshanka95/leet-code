/*
345. Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

function reverseVowels(s: string): string {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const char = s.split('')
    let i = 0
    let j = char.length - 1
    while (i < j) {
        if (!set.has(char[i])) {
            i++
        } else if (!set.has(char[j])) {
            j--
        } else {
            let temp = char[i]
            char[i] = char[j]
            char[j] = temp
            i++
            j--
        }
    }

    return char.join('')
};