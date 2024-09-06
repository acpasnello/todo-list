export function displayTodo(task) {
    // other functions, todoList and todoGrid, will control the layout of the display
    let todoDiv = document.createElement('div')
    todoDiv.id = task.id
    let title = document.createElement('h2')
    title.textContent = task.title
    todoDiv.appendChild(title)
    
    return todoDiv
}