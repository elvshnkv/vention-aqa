import Library from './library.js'
import Book from './books.js'
import Periodical from './periodicals.js'
import Chronicle from './chronicles.js'

const book1 = new Book('The Catcher', 'J.D. Salinger', 1951, 'Fiction')
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 'Novel')
const periodical1 = new Periodical('Magazine', 'Monthly', 2022)
const periodical2 = new Periodical('Newspaper', 'Daily', 2023)
const chronicle1 = new Chronicle('Historical Events', 'World War II', 1800)
const chronicle2 = new Chronicle('Modern History', 'Technology Advances', 2000)

Library.addItem(book1)
Library.addItem(book2)
Library.addItem(periodical1)
Library.addItem(periodical2)
Library.addItem(chronicle1)
Library.addItem(chronicle2)

Library.displayItems()

const numberOfItems = Library.countItems()
console.log(`Number of items in the Library: ${numberOfItems}`)

const sortedItems = Library.sortItems()
console.log(sortedItems)

const params = { genre: 'Fiction', year: 1951 }
const filteredItems = Library.findItemsByParams(params)
console.log('Items you are looking for:')
filteredItems.forEach((item) => item.displayInfo())

const allAuthors = Library.getAllAuthors()
console.log('All Authors:', allAuthors)

const requestedItem = Library.findItemByTitle('The Catcher')
console.log(requestedItem)

const releaseAfterYear = Library.displayItemsReleasedAfterYear(2000)
console.log(releaseAfterYear)
