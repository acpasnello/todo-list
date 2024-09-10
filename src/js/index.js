// import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import "../styles.css";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { format } from "date-fns"
import { pageStructure, displayProjectsNav, addTaskCard, displayTodo, updateCurrentProject } from "./layout.js";

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
    projects[0].description = "Default Todo List"
    projects[0].addTask(tasks[0].id)
    console.log(projects)
    updateCurrentProject(projects[0].title)
    tasks[0].dueDate = new Date(2024,8,8)
    let todoCount = projects[0].tasks.length
    for (let i = 0; i < todoCount; i++) {
        let task = displayTodo(tasks[projects[0].tasks[i]])
        addTaskCard(task)
    }
    
    displayProjectsNav(projects)
})