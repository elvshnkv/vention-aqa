export default class Chronicle {
	constructor(title, events, year) {
		this.title = title
		this.year = year
		this.events = events
	}

	displayInfo() {
		console.log(`Events: ${this.events}`)
	}
}
