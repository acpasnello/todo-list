import { capitalizeFirstLetter } from "./helpers"
import { todoManager } from "./todoManager";

export const uiManager = (function() {

    function pageStructure() {
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
        <div class="tasksDiv"></div>
    </div>
    `
    document.body.appendChild(container)
    
    }

    // function that changes which project is displayed
    function displayProject(project, tasks) {
        todoManager.changeCurrentProject(project)
        if (tasks[project]) {
            let taskDiv = document.querySelector('.tasksDiv')
            taskDiv.innerHTML = ""
            let titleDisp = document.getElementById('currentProject')
            updateTitleDisplay(project, titleDisp)
            tasks[project].forEach((task, index) => {
                let card = createTaskCard(task, index)
                displayTask(card)
            });
        }
    }
// Show list of user's projects in nav
    function displayProjectsNav(tasks) {
        let nav = document.querySelector('.nav')
        let projects = Object.keys(tasks)
        for (let i = 0; i < projects.length; i++) {
            let proj = document.createElement('div')
            proj.classList.add('navProjectTitle')
            proj.innerText = capitalizeFirstLetter(projects[i])
            proj.addEventListener('click', function(e){
                displayProject(projects[i], tasks)
            })
            nav.appendChild(proj)
        }
    }

    // Updates the Title display at the top of the task list
    function updateTitleDisplay(title, titleDisp) {
        let displayTitle = capitalizeFirstLetter(title)
        titleDisp.innerText = displayTitle
    }

    // Appends individual task to display
    function displayTask(card) {
        let tasksDiv = document.querySelector('.tasksDiv')
        tasksDiv.appendChild(card)
    }

    // Creates div containing individual task info
    function createTaskCard(task, index) {
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

    return { pageStructure, displayProjectsNav, updateTitleDisplay, displayTask, createTaskCard, displayProject }
})();