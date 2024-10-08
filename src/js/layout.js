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
    <div class="myNav"></div>
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
        let nav = document.querySelector('.myNav')

        let header = document.createElement('h3')
        header.innerText = 'Projects'
        header.classList.add('navHeader')
        nav.appendChild(header)

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
        let newProjButton = document.createElement('button')
        newProjButton.classList.add('newProjectButton', 'btn', 'btn-dark')
        newProjButton.innerText = 'New Project'
        newProjButton.addEventListener('click', function() {
            let form = createProjectForm()
            document.body.appendChild(form)
        })

        nav.appendChild(newProjButton)
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
            checkbox.addEventListener('click', checkCheckbox)
        } else {
            checkbox.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>`
            checkbox.addEventListener('click', uncheckCheckbox)
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

    function createTaskForm() {
        let div = document.createElement('div')
        div.classList.add('formWindow')
        let form = document.createElement('form')

        let titleL = document.createElement('label')
        titleL.setAttribute('for', 'title')
        titleL.innerText = "Title"
        let title = document.createElement('input')
        title.setAttribute('type', 'text')
        title.id = 'title'
        title.setAttribute('name', 'title')

        let projectL = document.createElement('label')
        projectL.setAttribute('for', 'project')
        let project = document.createElement('input')
        project.setAttribute('type', 'text')
        project.id = 'project'
        project.setAttribute('name', 'project')

        let priorityL = document.createElement('label')
        priorityL.setAttribute('for', 'priority')
        let priority = document.createElement('input')
        priority.setAttribute('type', 'range')
        priority.id = 'priority'
        priority.setAttribute('name', 'priority')

        let duedateL = document.createElement('label')
        duedateL.setAttribute('for', 'duedate')
        let duedate = document.createElement('input')
        duedate.setAttribute('type', 'date')
        duedate.id = 'duedate'
        duedate.setAttribute('name', 'duedate')

        let closeButton = createCloseButton()

        let elements = [titleL, title, projectL, project, priorityL, priority, duedateL, duedate]
        for (const element in elements) {
            form.appendChild(element)
        }
        div.appendChild(form)
        div.appendChild(closeButton)

        return div
    }

    function createProjectForm() {
        let div = document.createElement('div')
        div.classList.add('formWindow')
        let form = document.createElement('form')

        let label = document.createElement('label')
        label.setAttribute('for', 'name')
        label.innerText = 'Name'
        let name = document.createElement('input')
        name.setAttribute('type', 'text')
        name.id = 'name'
        name.setAttribute('name', 'name')

        let closeButton = createCloseButton()


        form.appendChild(label)
        form.appendChild(name)
        div.appendChild(form)
        div.appendChild(closeButton)

        return div
    }

    // could add a parameter to this function that takes the form the button is part of, to return the button already having the ability to close the form
    function createCloseButton() {
        let closeButton = document.createElement('button')
        closeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>`
        closeButton.classList.add('closeButton')

        return closeButton
    }

    return { pageStructure, displayProjectsNav, updateTitleDisplay, displayTask, createTaskCard, displayProject, checkCheckbox, uncheckCheckbox }
})();