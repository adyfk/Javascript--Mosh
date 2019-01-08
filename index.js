//For In
const person = {
    name: 'Adi',
    age: 20
}
for (let key in person) {
    console.log(key)
    console.log(person[key])
}

const colors = ['red', 'green', 'blue']
//For Of
for (let key of colors)
    console.log(key)

