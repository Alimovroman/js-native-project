import {CityType} from "../02-obj/02-02";
import {getStreetsTitleOfHouses, getStreetTitlesOfGovermentsBuildings} from "./05";

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
                    street: {title: 'central str.'}
                }
            },
            {
                type: 'fire station',
                budget: 20000,
                staffCount: 500,
                address: {
                    street: {title: 'south str.'}
                }
            }
        ],
        citizensNumber: 555555
    }
})

test('list of streets titles of goverments buildings', () => {
    let streets = getStreetTitlesOfGovermentsBuildings(city.govermentBuildings)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('central str.')
    expect(streets[1]).toBe('south str.')
})
test('list of streets titles of houses', () => {
    let streets = getStreetsTitleOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('white street')
    expect(streets[1]).toBe('happy street')
    expect(streets[2]).toBe('black street')
})