let person = {
    name: 'Adi',
    age: 18
}

//Dot Notation 
person.name = "Adi F"
console.log(person)

//Bracket Notation
person['name'] = "Uhuy"

//Dynamic
let selection = 'name'

person[selection] = "Adi F"
console.log(person)