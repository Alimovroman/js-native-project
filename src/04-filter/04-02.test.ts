import {CityType} from "../02-obj/02-02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCount} from "./04";



let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id:1, buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'white street'}
                }
            },
            {
                id:2, buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'happy street'}
                }
            },
            {
                id:3,buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'black street'}
                }
            }
        ],
        govermentBuildings: [
            {
                type: 'hospital',
                budget: 20000,
                staffCount: 200,
                address: {
                    street: {title: 'central str'}
                }
            },
            {
                type: 'fire station',
                budget: 20000,
                staffCount: 500,
                address: {
                    street: {title: 'central str'}
                }
            }
        ],
        citizensNumber: 555555
    }
})
test('houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'happy street')

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
    expect(city.houses[1].id).toBe(3)

})

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCount(city.govermentBuildings, 300)

    expect(buildings.length).toBe(1)
    expect(buildings[0].staffCount).toBe(500)
})

