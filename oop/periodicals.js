const Item = require('./items');

class Periodical extends Item {
    constructor(title, frequency, year) {
        super(title, year);
        this.frequency = frequency;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Frequency: ${this.frequency}`);
    }
}

module.exports = Periodical;