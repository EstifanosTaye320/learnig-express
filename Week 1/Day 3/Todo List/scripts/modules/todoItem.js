function TodoItem(title, message) {
  this.title = title;
  this.message = message;
  this.isDone = false;
  this.update = function (title = null, message = null) {
    if (message) {
      this.message = message;
    }
    if (title) {
      this.title = title;
    }
  };
  this.done = function () {
    this.isDone = !this.isDone;
  };
}

export { TodoItem };
