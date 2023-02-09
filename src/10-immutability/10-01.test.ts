import {
    addBook, addCompany,
    changeAddress,
    changeAddressWithoutLaptop, changeBook, changeCompany,
    icreaseAge, removeBook, updateCompanyTitle, upgradeLaptop,
    UserType, UserWithBooksType,
    UserWithLaptopType, WithCompaniesTypes
} from "./10-01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        }
    }

    let upgraidUser = icreaseAge(user, 2)

    expect(upgraidUser.hair).toBe(16)
    expect(upgraidUser.address).toBe(user.address)
})
test('change user address', () => {
    let user: UserType = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        }
    }

    let upgraidUser = changeAddress(user, 'Msk')

    expect(upgraidUser.address.title).toBe('Msk')
    expect(user.address.title).toBe('Rzn')
})
test('change user laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        },
        laptop: {
            title: 'acer'
        }
    }

    let upgraidUser = changeAddressWithoutLaptop(user, 'Msk')

    expect(upgraidUser).not.toBe(user)
    expect(upgraidUser.address).not.toBe(user.address)
    expect(upgraidUser.laptop).toBe(user.laptop)
    expect(upgraidUser.address.title).toBe('Msk')

})
test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        },
        laptop: {
            title: 'acer'
        }
    }

    let upgraidUser = upgradeLaptop(user, 'mackbook')

    expect(upgraidUser.laptop.title).toBe('mackbook')
    expect(upgraidUser.address).toBe(user.address)
    expect(upgraidUser).not.toBe(user)
    expect(upgraidUser.laptop).not.toBe(user.laptop)


})
test('upgrade user books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        },
        laptop: {
            title: 'acer'
        },
        books: ['css', 'js', 'react', 'html']
    }

    const upgradeUser = addBook(user, ['ts', 'redux'])

    expect(upgradeUser.books.length).toBe(6)
    expect(upgradeUser.books[4]).toBe('ts')
    expect(upgradeUser.books[5]).toBe('redux')
    expect(upgradeUser.books).not.toBe(user.books)
})
test('upgrade js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        },
        laptop: {
            title: 'acer'
        },
        books: ['css', 'js', 'react', 'html']
    }

    const upgradeUser = changeBook(user, 'js', 'ts')

    expect(upgradeUser.books[1]).toBe('ts')
})
test('remove book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        },
        laptop: {
            title: 'acer'
        },
        books: ['css', 'js', 'react', 'html']
    }

    const upgradeUser = removeBook(user, 'js')

    expect(upgradeUser.books.length).toBe(3)
})
test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesTypes = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        },
        laptop: {
            title: 'acer'
        },
        companies: [
            {id: 1, title: 'company-1'},
            {id: 2, title: 'company-2'},
            {id: 3, title: 'company-3'}
        ]
    }

    const upgradeUser = addCompany(user, 'company-4')

    expect(upgradeUser.companies.length).toBe(4)
    expect(upgradeUser.companies[3].title).toBe('company-4')
})
test('change company', () => {
    let user: UserWithLaptopType & WithCompaniesTypes = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        },
        laptop: {
            title: 'acer'
        },
        companies: [
            {id: 1, title: 'company-1'},
            {id: 2, title: 'company-2'},
            {id: 3, title: 'company-3'}
        ]
    }

    const upgradeUser = changeCompany(user, 2, 'epam') as UserWithLaptopType & WithCompaniesTypes

    expect(upgradeUser.companies.length).toBe(3)
    expect(upgradeUser.companies[1].title).toBe('epam')
})
test('update company', () => {
    let user: UserWithLaptopType = {
        name: 'Roman',
        hair: 32,
        address: {
            title: 'Rzn'
        },
        laptop: {
            title: 'acer'
        },
    }

    const companies = {
        'Roma': [{ id: 1, title: 'company-1' }, { id: 2, title: 'company-2' }],
        'Masha': [{ id: 2, title: 'company-2' }],
        'Sasha': [{ id: 3, title: 'company-3' }]
    }

    let companyCopy = updateCompanyTitle(companies,
        'Roma',
        2,
        'Epam')

    expect(companyCopy['Roma'][1].title).toBe('Epam')
})