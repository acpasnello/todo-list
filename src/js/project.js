import { Item } from "./parentClass.js"
import { isNumeric } from "./helpers.js"

let idCounter = 0

export class Project extends Item {
    constructor(title) {
        super(title)
        this.id = idCounter
        idCounter++
        this.tasks = []
    }

    set description(description) {
        this._description = description
    }

    get description() {
        return this._description
    }

    addTask(id) {
        if (isNumeric(id)) {
            if (!this.tasks.includes(id)) {
                this.tasks.push(id)
            }
        }
    }
}