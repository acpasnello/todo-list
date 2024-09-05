import { Item } from "./parentClass.js"
import { isValid } from "date-fns"

let idCounter = 1

export class Todo extends Item {
    constructor(title) {
        super(title)
        this.id = idCounter
        idCounter++
        this.completed = false
        this.notes = ""
    }

    get dueDate() {
        return this._dueDate
    }

    set dueDate(duedate) {
        if (isValid(duedate)) {
            this._dueDate = duedate
            return true
        } else return "Not a valid date"
    }

    clearDueDate() {
        this._dueDate = ""
    }

    completeTodo() {
        this.completed = true
    }

    unCheckTodo() {
        this.completed = false
    }

    get priority() {
        this._priority
    }

    set priority(n) {
        // Change this to accomodate priority settings later
        if (n >= 0 && n <= 3) {
            this._priority = n
        }
    }
}