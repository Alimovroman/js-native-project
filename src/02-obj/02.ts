export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: {
        street: string
        city: string
    }
    technologies: Array<{
        id: number
        title: string
    }>

}

export let student: StudentType = {
    name: 'roman',
    age: 32,
    isActive: true,
    address: {
        street: 'novatorov',
        city: 'ryazan'
    },
    technologies: [
        {id: 0, title: 'html'} ,
        {id: 1, title: 'css'} ,
        {id: 2, title: 'js'} ,
        {id: 3, title: 'react'} ,
    ]
}