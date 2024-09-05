const Todo = require("../src/todo")

let testTodo = new Todo.Todo

test('due date is set', () => {
    testTodo.dueDate = new Date(2024, 8, 8)
    expect(testTodo.dueDate).tobe(new Date(2024, 8, 8))
})