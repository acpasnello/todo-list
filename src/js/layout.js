export function pageStructure() {
    // if (window.innerWidth > 1200){

    // } else if (window.innerWidth > 800) {

    // } else if (window.innerWidth > 400) {

    // } else {

    // }

    let container = document.createElement('div')
    container.classList.add('container')
    container.innerHTML = 
    `
    <div class="nav"></div>
    <div class="content"></div>
    `
    document.body.appendChild(container)
}

export function addTaskCard(card) {
    let contentDiv = document.querySelector('.content')
    contentDiv.appendChild(card)
}

export function displayTodo(task) {
    // other functions, todoList and todoGrid, will control the layout of the display
    let todoDiv = document.createElement('div')
    todoDiv.id = task.id
    todoDiv.classList.add('taskCard')
    let title = document.createElement('h2')
    title.textContent = task.title
    todoDiv.appendChild(title)
    
    return todoDiv
}