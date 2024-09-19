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
                console.log(index)
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
        if (!task.completed) {
            checkbox.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            </svg>`
        } else {
            checkbox.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>`
        }
        checkbox.classList.add('checkbox')
        todoDiv.appendChild(checkbox)
        let title = document.createElement('span')
        title.classList.add('taskTitle')
        title.textContent = task.title
        todoDiv.appendChild(title)
        
        return todoDiv
    }

    function checkCheckbox(e) {
        let element = correctCheckboxElement(e.target)
        element.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
        </svg>`
        element.removeEventListener('click', checkCheckbox)
        element.addEventListener('click', uncheckCheckbox)
    }

    function uncheckCheckbox(e) {
        let element = correctCheckboxElement(e.target)
        element.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        </svg>`
        element.removeEventListener('click', uncheckCheckbox)
        element.addEventListener('click', checkCheckbox)
    }

    function correctCheckboxElement(element) {
        // Need to make sure to change innerHTML and add event listener to <span>, not its children
        let corrected = element;
        if (element.nodeName == 'path') {
            corrected = element.parentElement.parentElement
        }
        if (element.nodeName == 'svg') {
            corrected = element.parentElement
        }

        return corrected
    }

    return { pageStructure, displayProjectsNav, updateTitleDisplay, displayTask, createTaskCard, displayProject, checkCheckbox, uncheckCheckbox }
})();