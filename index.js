const numbers = [-1, 2, -1, 3, 4]

let sum = 0
for (let n of numbers)
    sum += n
console.log(sum)

sum = numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue)   //optional params last for initial value of accumulator 

console.log(sum)
