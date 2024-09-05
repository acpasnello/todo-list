import "./styles.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";

let todos = {}
function createTodo(title) {
    let newTodo = new Todo(title)
    todos[newTodo.id] = newTodo
}