import {GovernmentBuildingsType, HouseType} from "../02-obj/02-02";

export type PeopleType = {
    name: string
    age: number
}
const pepole: Array<PeopleType> = [
    {name: "Roman Petrov", age: 32},
    {name: "Alex Volkov", age: 18},
    {name: "Masha Kozlova", age: 21},
]

const personTransformator = (man: PeopleType ) => ({
        stack: ['CSS', 'JS', 'React', 'HTML'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })

const devs = [
    {
        stack: ['CSS', 'JS', 'React', 'HTML'],
        firstName: 'Roman', lastName: 'Petrov'
    },
    {
        stack: ['CSS', 'JS', 'React', 'HTML'],
        firstName: 'Alex', lastName: 'Volkov'
    },
    {
        stack: ['CSS', 'JS', 'React', 'HTML'],
        firstName: 'Masha', lastName: 'Kozlova'
    }
]

const devs2 = pepole.map(m => ({
    stack: ['CSS', 'JS', 'React', 'HTML'],
    firstName: m.name.split(' ')[0],
    lastName: m.name.split(' ')[1]
}))

export const createGreetingPeople = (pepole: Array<PeopleType>) => {
    return pepole.map(m => `hello ${m.name.split(' ')[0]}`)
}

export const  getStreetTitlesOfGovermentsBuildings = (govermentBuildings: Array<GovernmentBuildingsType>) => {
    const newGovermentBuildongs = govermentBuildings.map( b => b.address.street.title)
    return newGovermentBuildongs
}

export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    const newStreets = houses.map(s => s.address.street.title)
    return newStreets
}