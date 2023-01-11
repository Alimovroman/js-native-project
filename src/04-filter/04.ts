import {CityType, GovernmentBuildingsType} from "../02-obj/02-02";

const ages = [14,88,23,100,46,21]

const oldAges = [100]

export const demolishHousesOnTheStreet = (city: CityType, street: string) =>{
    return  city.houses = city.houses.filter(s => s.address.street.title !== street)
}

export const getBuildingsWithStaffCount = (govermentBuildings: Array<GovernmentBuildingsType>, staffCount: number) => {
    return govermentBuildings.filter(e => e.staffCount > staffCount)
}