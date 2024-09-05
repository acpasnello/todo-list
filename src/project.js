import { Item } from "./parentClass.js"

let idCounter = 1

export class Project extends Item {
    constructor(title) {
        super(title)
        this.id = idCounter
        idCounter++
    }
}