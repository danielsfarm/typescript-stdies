const TypeNmber : number = 1
const TypeSring : string = 'string'
const TypeBoolean : boolean = true

// Type Aliases & Object Types
type User = {name: String, age: Number};
const u1: User = {name: 'Daniel', age: 24}

// Exemple
function greet1(user: {name: string, age: number}) {
    return console.log(`Hi I'm ${user.name}`)
}

function isOlder1(user: {name: string, age: number}) {
    return console.log(`Hi I'm ${user.name}`)
}

// Better way to use types
function greet2(user: User) {
    return console.log(`Hi I'm ${user.name}`)
}

function isOlder2(user: User) {
    return console.log(`Hi I'm ${user.name}`)
}