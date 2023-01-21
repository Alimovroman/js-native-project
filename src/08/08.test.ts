type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'roma'},
        '102565': {id: 102565, name: 'masha'},
        '1034': {id: 1034, name: 'sasha'},
        '3': {id: 3, name: 'kolya'}
    }
})

test('should update corresponding user', () => {

    users['3'].name = 'Nikolay'

    expect(users['3']).toStrictEqual({id: 3, name: 'Nikolay'})
})

test('should delete corresponding user', () => {

    delete users['3']

    expect(users['3']).toBe(undefined)
})