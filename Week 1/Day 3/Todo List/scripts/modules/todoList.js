import { TodoItem } from "./todoItem.js";

function TodoList() {
  this.todos = [];
  this.addtodo = function (title, message) {
    const new_todo = new TodoItem();
    new_todo.message = message;
    new_todo.title = title;
    this.todos.push(new_todo);
  };
  this.update = function (idx, title = null, message = null, callback) {
    try {
      const to_update = this.todos[idx];
      to_update.update(title, message);
      callback(null, to_update);
    } catch (err) {
      callback(err, null);
    }
  };
}

export { TodoList };
