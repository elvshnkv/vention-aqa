class Book {
	constructor(title, author, year, genre) {
		this.title = title
		this.author = author
		this.year = year
		this.genre = genre
	}

	displayInfo() {
		console.log(
			`Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}`
		)
	}
}

export default Book
