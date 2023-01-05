import {CityType} from "../02-obj/02-02";
import {addMoneyToByBudget, demolishHousesOnTheStreet, repairHouses, showingMessage} from "./03";


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
                    street: {title: 'happy street'}
                }
            },
            {
                buildedAt: 2012,
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

test('budget should be changed for Hospital', () => {

    addMoneyToByBudget(city, 'hospital', 10000)

    expect(city.govermentBuildings[0].budget).toBe(30000)
})

test('houses should be destroyed', () => {

        demolishHousesOnTheStreet(city, 'happy street')

    expect(city.houses[1].address.number).toBe(1)
    // expect(city.houses[0].id).toBe(1)
})

test('houses should be repaired', () => {

    repairHouses(city, 'black street')

    expect(city.houses[2].repaired).toBe(true)
})

test('showing message', () => {

    const result = showingMessage(city)

    expect(result).toBe('hey bro')
})