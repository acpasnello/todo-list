import { capitalizeFirstLetter } from "./helpers"

export function pageStructure() {
    // if (window.innerWidth > 1200){

    // } else if (window.innerWidth > 800) {

    // } else if (window.innerWidth > 400) {

    // } else {

    // }

    let container = document.createElement('div')
    container.classList.add('myContainer', 'container-fluid')
    container.innerHTML = 
    `
    <div class="nav"></div>
    <div class="content">
        <h1 id="currentProject"></h1>
    </div>
    `
    document.body.appendChild(container)
    
}

// Show list of user's projects in nav
export function displayProjectsNav(tasks) {
    let nav = document.querySelector('.nav')
    let projects = Object.keys(tasks)
    for (let i = 0; i < projects.length; i++) {
        let proj = document.createElement('div')
        proj.classList.add('navProjectTitle')
        proj.innerText = capitalizeFirstLetter(projects[i])
        nav.appendChild(proj)
    }
}

// Updates the Title display at the top of the task list
export function updateCurrentProject(title) {
    let titleDisp = document.getElementById('currentProject')
    titleDisp.innerText = title
}

// Appends individual task to display
export function addTaskCard(card) {
    let contentDiv = document.querySelector('.content')
    contentDiv.appendChild(card)
}

// Creates div containing individual task info
export function displayTodo(task, index) {
    let todoDiv = document.createElement('div')
    todoDiv.id = index
    todoDiv.classList.add('taskCard')
    let checkbox = document.createElement('span')
    checkbox.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    </svg>`
    todoDiv.appendChild(checkbox)
    let title = document.createElement('span')
    title.classList.add('taskTitle')
    title.textContent = task.title
    todoDiv.appendChild(title)
    
    return todoDiv
}