class Items {
    constructor(title, year) {
        this.id = this.generateId();
        this.title = title;
        this.year = year;
    }

    displayInfo() {
        console.log(`ID: ${this.id}, Title: ${this.title}, Year: ${this.year}`);
    }

    generateId() {
        return ++Items.counter;
    }
}

Items.counter = 0;
