const numbers = [1, 2, 3, 4, 2, 1]
console.log(numbers)
console.log(numbers.sort())
console.log(numbers.reverse())


//example when Object

const course = [
    { id: 2, name: 'Javascript' },
    { id: 1, name: 'ANode JS' },
    { id: 3, name: 'BNode JS' },
    { id: 4, name: 'ZNode JS' },
    { id: 5, name: 'PNode JS' }
]
course.sort((first, second) => {
    if (first.name < second.name) return -1
    else if (first.name > second.name) return 1
    return 0
})
console.log(course)