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

    tasks.todo.push(new Task('Setup all my tasks', 'todo'))
    tasks.work.push(new Task('Finish email to boss', 'work'))
    tasks.work[0].completeTodo()

    uiManager.uiRefresh(todoManager.getCurrentProject(), tasks)
})