import {StudentType} from "../02-obj/02";
import {CityType} from "../02-obj/02-02";

export const sum = (a:number, b: number) => {
    return a + b
}

console.log(sum(sum(1,3), sum(2,4)))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive =false
}

export const studentLive = (student:StudentType, city:string) => {
    return student.address.city === city ? true : false
}

export const addMoneyToByBudget = (city: CityType, cityName: string, money: number) => {
    city.govermentBuildings.filter(e => e.budget = e.type === cityName ? e.budget + money : e.budget)
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses.filter(e => e.address.number = e.address.street.title === street ? 1 : e.address.number )
}

export const repairHouses = (city: CityType, street: string) => {
    city.houses.filter(e => e.repaired = e.address.street.title === street )
}

export const showingMessage = (city: CityType) => {
    return 'hey bro'
}