import {createGreetingPeople, PeopleType} from "./05";

let pepole: Array<PeopleType>

beforeEach(() => {
    pepole = [
        {name: "Roman Petrov", age: 32},
        {name: "Alex Volkov", age: 18},
        {name: "Masha Kozlova", age: 21},
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetingPeople(pepole)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('hello Roman')
    expect(messages[1]).toBe('hello Alex')
    expect(messages[2]).toBe('hello Masha')
})