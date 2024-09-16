import { isValid } from "date-fns"
import { settings } from "./settings.js"

// let idCounter = 0

export class Task {
    constructor(title, project) {
        this.title = title
        this.timeCreated = Date.now()
        this.lastModified = Date.now()
        this._priority = settings.defaultPriority
        this.completed = false
        this.notes = ""
        this.project = project
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
        if (n >= settings.minPriority && n <= settings.maxPriority) {
            this._priority = n
        } else return `Enter a valid priority, from ${settings.minPriority} to ${settings.maxPriority}`
    }

    get project() {
        this._project
    }

    set project(id) {
        // let myProjects = Object.keys(projects)
        // if (myProjects.includes(id)) {
        //     this._project = id
        // }
    }
}