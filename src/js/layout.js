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
    <div class="content"></div>
    `
    document.body.appendChild(container)
}

export function displayProjects(projects) {
    let nav = document.querySelector('.nav')
    let projectIDs = Object.keys(projects)
    for (let i = 0; i < projectIDs.length; i++) {
        let proj = document.createElement('div')
        proj.classList.add('navProjectTitle')
        proj.innerText = projects[projectIDs[i]].title
        nav.appendChild(proj)
    }
}

export function addTaskCard(card) {
    let contentDiv = document.querySelector('.content')
    contentDiv.appendChild(card)
}

export function displayTodo(task) {
    let todoDiv = document.createElement('div')
    todoDiv.id = task.id
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