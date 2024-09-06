import { Item } from "./parentClass.js"

let idCounter = 0

export class Project extends Item {
    constructor(title) {
        super(title)
        this.id = idCounter
        idCounter++
    }

    set description(description) {
        this._description = description
    }

    get description() {
        return this._description
    }
}