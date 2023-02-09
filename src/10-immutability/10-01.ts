export type UserType = {
    name: string
    hair: number
    address: {
        title: string
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type WithCompaniesTypes = {
    companies: Array<{ id: number, title: string }>
}

export function icreaseAge(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / 2
    }
    return copy
}

export function changeAddress(u: UserType, newCity: string) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            title: newCity
        }
    }
    return copy
}

export function changeAddressWithoutLaptop(u: UserWithLaptopType, newCity: string) {
    return {
        ...u,
        address: {
            ...u.address,
            title: newCity
        }
    }

}

export function upgradeLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title
        }

    }
}

export function addBook(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {
        ...u,
        books: u.books.concat(books)
    }
}

export const changeBook = (u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           bookTitle: string) => ({
    ...u,
    books: u.books.map(el => el === oldBook
        ? bookTitle
        : el
    )

})
export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
                           book: string) => ({
    ...u,
    books: u.books.filter(el => el !== book)
})
export const addCompany = (u: UserWithLaptopType & WithCompaniesTypes,
                           title: string) => {
    const newCompany = {id: 4, title}
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}
export const changeCompany = (u: WithCompaniesTypes,
                              id: number,
                              title: string) => ({
    ...u,
    companies: u.companies.map(el => el.id === id
        ? {...el, title}
        : el)
})

export const updateCompanyTitle = (companies: { [key: string]: Array<{id: number, title: string}> },
                                   userName: string,
                                   companyId: number,
                                   newTitle: string) => {
    return {
        ...companies,
        [userName]: companies[userName].map(el => el.id === companyId
            ? {...el, title: newTitle}
            : el
        )
    }

}