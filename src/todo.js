import { Item } from "./parentClass.js"
import { isDate } from "date-fns"

let idCounter = 1

export class Todo extends Item {
    constructor(title) {
        super(title)
        this.id = idCounter
        idCounter++
    }

    set dueDate(duedate) {
        if (isDate(duedate)) {
            this.dueDate = duedate
            return true
        } else return "Not a valid date"

    }

    get dueDate() {
        return this.dueDate
    }
    
    clearDueDate() {
        this.dueDate = ""
    }
}