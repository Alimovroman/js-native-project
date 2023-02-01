import {UserType} from "./09-01";

function icreaseAge(user: UserType) {
    user.age++
}

test('obj test', () => {
    let user: UserType = {
        name: 'Roman',
        age: 32,
        address: {
            city: 'Ryazan'
        }
    }
    icreaseAge(user)
    expect(user.age).toBe(33)

    const superMan = user
    superMan.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users: Array<UserType> = [
        {
            name: 'Roman',
            age: 32,
            address: {
                city: 'Ryazan'
            }
        },
        {
            name: 'Masha',
            age: 32,
            address: {
                city: 'Ryazan'
            }
        },
    ]
    let admins = users
    admins.push({name: 'rarara', age: 5,address: {
            city: 'Ryazan'
        }})
    expect(users[2]).toStrictEqual({name: 'rarara', age: 5})


})
test('obj new test', () => {
    let user: UserType = {
        name: 'Roman',
        age: 32,
        address: {
            city: 'Ryazan'
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Masha',
        age: 32,
        address: user.address
    }

    const users = [user, user2, {name: 'Sasha', age: 32, address: addr}]
    const admins = [user, user2]

    admins[0].name = 'Romik'

    expect(users[0].name).toBe('Romik')
})


// test('value type test', () => {
//     let userCount = 100
//     let adminCount = userCount
//
//     expect()
// })
