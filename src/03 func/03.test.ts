import {StudentType} from "../02-obj/02";
import {addSkill, makeStudentActive, studentLive} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        name: 'roman',
        age: 32,
        isActive: true,
        address: {
            street: 'novatorov',
            city: 'ryazan'
        },
        technologies: [
            {id: 0, title: 'html'} ,
            {id: 1, title: 'css'} ,
            {id: 2, title: 'js'} ,
            {id: 3, title: 'react'} ,
        ]
    }
})
test('new skill should be added to student', () => {

    addSkill(student, 'redux')

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe('redux')

})

test('student should be made active', () => {
    makeStudentActive(student)

    expect(student.isActive).toBe(false)
})

test('does studient live in city?', () => {

    let result1 = studentLive(student,'moscow')
    let result2 = studentLive(student,'ryazan')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

