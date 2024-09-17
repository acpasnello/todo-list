// import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import "../styles.css";
import { Task } from "./task.js";
import { format } from "date-fns"
import { uiManager } from "./layout.js";
import { capitalizeFirstLetter } from './helpers.js';
import { todoManager } from './todoManager.js';

let tasks = {
    'todo': [],
    'work': [],
    'complete': []
}



document.addEventListener('DOMContentLoaded', function() {
    uiManager.pageStructure()

    tasks.todo.push(new Task('Setup all my tasks', 'todo'))
    tasks.work.push(new Task('Finish email to boss', 'work'))
    uiManager.updateCurrentProject(capitalizeFirstLetter(todoManager.getCurrentProject()))
    for (let i = 0; i < tasks[todoManager.getCurrentProject()].length; i++) {

        let card = uiManager.displayTodo(tasks.todo[i])
        uiManager.addTaskCard(card)
    }
    
    uiManager.displayProjectsNav(tasks)
})