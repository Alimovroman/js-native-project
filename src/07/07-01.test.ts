import {ManType} from "./07-01";

let man: ManType;
beforeEach(() => {
    man = {
        name: 'Roma',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}]
    }
})

test('new test', () => {

    let [,,l3] = man.lessons
    let {age, name} = man
    expect(l3.title).toBe('3')
})