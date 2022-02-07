// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string, number]
// } =
// {
//     name: 'Daniel',
//     age: 24,
//     hobbies: ['sports', 'games'],
//     role: [2, 'author', 3]
// }

enum Role { ADMIN = 5, READ_ONLY, AUTHOR } // 5, 6 ,7 -> FOLLWO THE FRIST NUMBER

const person = {
    name: 'Daniel',
    age: 24,
    hobbies: ['sports', 'games'],
    role: Role.ADMIN
}

// person.role.push('admin')
// person.role = [0, 'admin', 23]

let favoriteActivities: string[]
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby)
}

if (person.role === Role.ADMIN) {
    console.log('is admin.')
}