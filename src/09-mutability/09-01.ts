export type UserType = {
    name: string
    age: number
    address: {
        city: string
    }
}
let user: UserType = {
    name: 'Roman',
    age: 32,
    address: {
        city: 'Ryazan'
    }
}

function icreaseAge(user: UserType) {
    user.age ++
}