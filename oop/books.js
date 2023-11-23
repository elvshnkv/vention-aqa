const Item = require('./items');

class Book extends Item {
    constructor(title, author, year, genre) {
        super(title);
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}`);
    }
}

module.exports = Book;