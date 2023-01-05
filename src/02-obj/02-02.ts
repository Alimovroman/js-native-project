
export type HouseType =    {
    buildedAt: number
    repaired: boolean
    address: {
        number: number
        street: {
            title: string
        }
    }
}
export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: {
        street: {title: string}
    }
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: Number
}