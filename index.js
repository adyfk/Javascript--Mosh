const numbers = [-1, 2, 3, 4]

const filtered = numbers.filter((val) => val >= 0)
console.log(filtered)

const itemsToObj = filtered.map(n => ({ value: n }))
console.log(itemsToObj)

const items = filtered.map(n => '<li>' + n + '</li>')
const html = '<ul>' + items.join('') + '</ul>'
console.log(html)


//How to Make it Simple
const items2 = numbers
    .filter(val => val >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 2)
    .map(obj => obj.value)
console.log(items2)

