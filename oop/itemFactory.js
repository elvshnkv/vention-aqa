const Book = require('./books');
const Periodical = require('./periodicals.js');
const Chronicle = require('./chronicles.js');

class ItemFactory {
    createBook(title, author, year, genre) {
        return new Book(title, author, year, genre);
    }

    createPeriodical(title, frequency, year) {
        return new Periodical(title, frequency, year);
    }

    createChronicle(title, events, year) {
        return new Chronicle(title, events, year);
    }
}

module.exports = ItemFactory;