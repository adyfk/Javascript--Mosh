const person = {
    firstName: 'Adi',
    lastname: 'Fatkhurozi',
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a String.')
        const parts = value.split(' ')
        if (parts.length !== 2)
            throw new Error('Enter the firstname and Last Name')
        this.firstName = parts[0]
        this.lastname = parts[1]
    }
}
try {
    person.fullName = ''
} catch (e) {
    console.log(e)
}
//getters => access properties get
//setters => change (mutate) them
console.log(person.fullName)