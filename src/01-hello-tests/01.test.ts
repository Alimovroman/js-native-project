import {mult, splitIntoWords, sum} from "./01";
let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum will should be correct', () => {

    const result = sum(a,b)

    expect(result).toBe(c);
})

test('mult will should be correct', () => {

    const result = mult(a, b)

    expect(result).toBe(2)
})

test('split into words should be correct', () => {
    let str1 = 'Hello  roman! yo'
    let str2 = 'hey wats up! man'

    let result1 = splitIntoWords(str1)
    let result2 = splitIntoWords(str2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('roman')
    expect(result1[2]).toBe('yo')
    expect(result2.length).toBe(4)
})