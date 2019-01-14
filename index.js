//Function Declaration
function walk() {
    console.log('run')
}

//Function Expression
let run = function () {
    console.log('run')
}

//argument
function sum() {
    console.log(arguments)
    let total = 0
    for (let value of arguments)
        total += value
    return total
}
console.log(sum(5, 4, 3, 2))

// The Best Operator
function sum2(...args) {
    return args.reduce((a, b) => a + b)
}
console.log(sum2(5, 4, 3, 2))

// The Best Operator
function sum3(discount, ...args) {
    const total = args.reduce((a, b) => a + b)
    return total * (1 - discount)
}
console.log('Discount', sum3(0.1, 20, 30))

//Default Paramter
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years
}
console.log('Interest', interest(10000, undefined, 3))
