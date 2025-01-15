
//605. Can Place Flowers

function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    if (n === 0) return true
    let i = 0

    let count = 0

    while (i < flowerbed.length) {
        if (
            flowerbed[i] == 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)

        ) {
            flowerbed[i] = 1
            i += 2
            count++

        } else {
            i++
        }

    }

    if (n <= count) {
        return true
    }

    return false

};