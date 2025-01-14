/*
1768. Merge Strings Alternately
*/

function mergeAlternately(word1: string, word2: string): string {

    let i = 0
    let j = Math.max(word1.length, word2.length)

    let s = ''
    while (i < j) {
        if(i < word1.length){
            s += word1[i]
        }
        if (i < word2.length) {
            s += word2[i]
        }

        i++
    }


    return s

};