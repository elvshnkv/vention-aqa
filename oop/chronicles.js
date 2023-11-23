const Item = require('./items');

class Chronicle extends Item {
    constructor(title, events, year) {
        super(title, year);
        this.events = events;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Events: ${this.events}`);
    }
}

module.exports = Chronicle;