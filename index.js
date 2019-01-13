const numbers = [1, 2, 3, 4, 1, 1, 7]

const count = countOccurences(numbers, 1)

console.log(count)

function countOccurences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const sum = current === searchElement ? 1 : 0
        return sum + accumulator
    })
}


