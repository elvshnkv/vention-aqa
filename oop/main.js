const Library = require('./library');
const ItemFactory = require('./itemFactory.js');

const itemFactory = new ItemFactory();
const library = new Library();

const book1 = itemFactory.createBook('The Catcher in the Rye', 'J.D. Salinger', 1951, 'Fiction');
const book2 = itemFactory.createBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Novel');
const periodical1 = itemFactory.createPeriodical('Magazine', 'Monthly', 2022);
const book3 = itemFactory.createBook('1984', 'George Orwell', 1949, 'Dystopian');
const periodical2 = itemFactory.createPeriodical('Newspaper', 'Daily', 2023);
const book4 = itemFactory.createBook('Pride and Prejudice', 'Jane Austen', 1813, 'Romance');
const book5 = itemFactory.createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Classic');
const chronicle1 = itemFactory.createChronicle('Historical Events', 'World War II, Industrial Revolution', 1800);
const chronicle2 = itemFactory.createChronicle('Modern History', 'Technology Advances', 2000);

library.addItem(book1);
library.addItem(book2);
library.addItem(periodical1);
library.addItem(book3);
library.addItem(periodical2);
library.addItem(book4);
library.addItem(chronicle1);
library.addItem(book5);
library.addItem(chronicle2);

library.displayItems();

const numberOfItems = library.countItems();
console.log(`Number of items in the library: ${numberOfItems}`);

const sortedItems = library.sortItems();
console.log(sortedItems);

const params = { genre: "Fiction", year: 1951 };
const filteredItems = library.findItemsByParams(params);
console.log("Items you are looking for:");
filteredItems.forEach(item => item.displayInfo());

const allAuthors = library.getAllAuthors();
console.log("All Authors:", allAuthors);

const requestedItem = library.findItemByTitle("The Great Gatsby");
console.log(requestedItem);

const releaseAfterYear = library.displayItemsReleasedAfterYear(2000);
console.log(releaseAfterYear);