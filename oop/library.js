import Book from './books.js'

class Library {
	constructor() {
		if (Library.instance) {
			return Library.instance
		}

		this.items = []
		Library.instance = this
	}

	addItem(item) {
		this.items.push(item)
	}

	displayItems() {
		console.log('Items in the library:')
		const sortedItems = this.items.slice().sort((a, b) => a.id - b.id)
		sortedItems.forEach((item) => {
			item.displayInfo()
		})
	}

	sortItems() {
		const sortedItems = this.items.slice().sort((a, b) => {
			if (a.constructor.name < b.constructor.name) {
				return -1
			} else if (a.constructor.name > b.constructor.name) {
				return 1
			} else {
				return a.id - b.id
			}
		})
		return sortedItems
	}

	countItems() {
		return this.items.length
	}

	findItemsByParams(params) {
		return this.items.filter((item) => {
			for (const key in params) {
				if (params.hasOwnProperty(key)) {
					if (item[key] !== params[key]) {
						return false
					}
				}
			}
			return true
		})
	}

	getAllAuthors() {
		const authors = new Set()
		this.items
			.filter((item) => item instanceof Book)
			.forEach((book) => authors.add(book.author))
		return Array.from(authors)
	}

	findItemByTitle(title) {
		return this.items.find((item) => item.title === title)
	}

	displayItemsReleasedAfterYear(year) {
		return this.items.filter((item) => item.year > year)
	}
}

export default new Library()
