
export const sum = (a:number,b: number) => {
    return a + b
}
export const mult = (a:number, b:number) => {
    return a * b
}
export const splitIntoWords = (str: string) => {
    let result = str.toLowerCase().split(' ')
        .filter(e => e !== '')
        .map((e) => e.replace('!', ''))
    return result
}