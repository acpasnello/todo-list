import "./styles.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { format } from "date-fns"

let todos = {}
function addTodo(title) {
    let newTodo = new Todo(title)
    todos[newTodo.id] = newTodo
}

let projects = {}
function addProject(title) {
    let newProject = new Project(title)
    projects[newProject.id] = newProject
}

document.addEventListener('DOMContentLoaded', function() {
    addTodo("Test todo creation")
    addProject("Todo List")
    projects[1].description = "Default Todo List"
    console.log(todos)
    console.log(format(todos[1].timeCreated, 'h:m:ss aa MM/dd/yyyy'))
    console.log(projects)
    todos[1].dueDate = Date.now()
    console.log(todos[1])
})