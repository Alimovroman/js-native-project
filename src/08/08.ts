
export const userObj = {
    '0': 'roma',
    '1': 'masha',
    '2': 'sasha',
    '3': 'kolya',
}
type UsersType = {
    [key: string]: {id:number, name: string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'roma'},
    '102565': {id: 102565, name: 'masha'},
    '1034': {id: 1034, name: 'sasha'},
    '3': {id: 3, name: 'kolya'}
}

export const userArray = [
    {id: 101, name: 'roma'},
    {id: 102565, name: 'masha'},
    {id: 1034, name: 'sasha'},
    {id: 3, name: 'kolya'}
]
let user = {id: 100500, name: 'tyty'}
users[users.id.toString()] = user