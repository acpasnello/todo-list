// import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import "../styles.css";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { format } from "date-fns"
import { pageStructure, displayProjects, addTaskCard, displayTodo } from "./layout.js";

let tasks = {}
function addTask(title) {
    let newTask = new Task(title)
    tasks[newTask.id] = newTask
}

let projects = {}
function addProject(title) {
    let newProject = new Project(title)
    projects[newProject.id] = newProject
}

document.addEventListener('DOMContentLoaded', function() {
    pageStructure()

    addTask("Test todo creation")
    addProject("Todo List")
    addProject("Completed")
    console.log(projects)
    projects[0].description = "Default Todo List"
    // console.log(todos)
    // console.log(format(todos[0].timeCreated, 'h:m:ss aa MM/dd/yyyy'))
    tasks[0].dueDate = new Date(2024,8,8)
    let todoCount = Object.keys(tasks)
    for (let i = 0; i < todoCount.length; i++) {
        let task = displayTodo(tasks[todoCount[i]])
        addTaskCard(task)
    }
    
    displayProjects(projects)
})