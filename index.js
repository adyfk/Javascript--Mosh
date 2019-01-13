const numbers = [-1, -2, -3, -4]

const allPositive = numbers.every((val) => val >= 0)    //every
const allPositive2 = numbers.some((val) => val >= 0)    //atLeastOne (salah satu)
console.log(numbers)
console.log(allPositive)
console.log(allPositive2)
