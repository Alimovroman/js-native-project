import {CityType} from "./02-02";

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'white street'}
                }
            },
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'white street'}
                }
            },
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'white street'}
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
                type: 'hospital',
                budget: 20000,
                staffCount: 200,
                address: {
                    street: {title: 'central str'}
                }
            }
        ],
        citizensNumber: 555555
    }
})

test('city should contains 3 houses', () => {

    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('white street')
})

test('city should contains hospital and station', () => {
    expect(city.govermentBuildings.length).toBe(2)

    expect(city.govermentBuildings[0].type).toBe('hospital')
    expect(city.govermentBuildings[0].budget).toBe(20000)
    expect(city.govermentBuildings[0].staffCount).toBe(200)
    expect(city.govermentBuildings[0].address.street.title).toBe('central str')
})