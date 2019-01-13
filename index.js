const numbers = [3, 4, 5]
//Add End
numbers.push(7, 8, 9)
//Add Begining
numbers.unshift(-1, 0, 1)
//replace and delete
numbers.splice(2, 1, 'a', 'b')
console.log(numbers)

const nomer = [1, 2, 3, 4, 5, 6, 1, 7]
console.log(nomer.indexOf('1'))
console.log(nomer.lastIndexOf(1))

console.log(nomer.indexOf(1) != -1)//mean is Exist or not
console.log(nomer.includes(9)) //mean is Exist or not


//FInd a Object in Array
const course = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]
const cek = course.find(function (element) {
    return element.name === 'a'
})

console.log('Cek', cek)
//Return 0 if Exist
const cik = course.findIndex(function (element) {
    return element.name === 'aaa'
})

console.log('Cek', cik)