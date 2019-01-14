const person = {
    firstName: 'Adi',
    lastname: 'Fatkhurozi',
    get fullName() {
        return `${this.firstName} ${this.lastname}`
    },
    set fullName(value) {
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastname = parts[1]
    }
}
person.fullName = "Haerani Lathifah"
//getters => access properties get
//setters => change (mutate) them
console.log(person.fullName)