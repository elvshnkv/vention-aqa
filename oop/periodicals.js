export default class Periodical {
	constructor(title, frequency, year) {
		this.title = title
		this.frequency = frequency
		this.year = year
	}

	displayInfo() {
		console.log(`Frequency: ${this.frequency}`)
	}
}
