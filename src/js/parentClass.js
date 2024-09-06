export class Item {
    constructor(title) {
        this.title = title
        this.timeCreated = Date.now()
        this.lastModified = Date.now()
    }
}