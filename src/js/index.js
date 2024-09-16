// import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import "../styles.css";
import { Task } from "./task.js";
import { format } from "date-fns"
import { pageStructure, displayProjectsNav, addTaskCard, displayTodo, updateCurrentProject } from "./layout.js";
import { capitalizeFirstLetter } from './helpers.js';

let tasks = {
    'todo': [],
    'work': [],
    'complete': []
}



document.addEventListener('DOMContentLoaded', function() {
    pageStructure()

    tasks.todo.push(new Task('Setup all my tasks', 'todo'))
    tasks.work.push(new Task('Finish email to boss', 'work'))
    updateCurrentProject(capitalizeFirstLetter('todo'))
    for (let i = 0; i < tasks.todo.length; i++) {

        let card = displayTodo(tasks.todo[i])
        addTaskCard(card)
    }
    
    displayProjectsNav(tasks)
})