import { TodoList } from "./modules/todoList.js";
import { listItem } from "./elements/listItem.js";

const listArea = document.querySelector("#list");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".inputField");
const todoList = new TodoList();

function main() {
  todoList.todos.forEach((ele, id) => {
    listArea.innerHTML += listItem(id + 1, ele.title, ele.message);
  });

  const blackShip = document.querySelectorAll(".theblackship");
  const toggle = document.querySelectorAll(".toggle");

  todoList.todos.forEach((ele, id) => {
    toggle[id].addEventListener("click", function () {
      blackShip[id].style.display =
        blackShip[id].style.display === "flex" ? "none" : "flex";

      todoList.todos[id].done();

      toggle[id].style.backgroundColor =
        toggle[id].style.backgroundColor === "chartreuse"
          ? "red"
          : "chartreuse";
    });

    blackShip[id].style.display = ele.isDone ? "flex" : "none";
  });
}

main();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let title, message;

  inputs.forEach((ele, id) => {
    if (id === 0) {
      title = ele.value;
    } else {
      message = ele.value;
    }
    ele.value = "";
  });

  todoList.addtodo(title, message);
  listArea.innerHTML = "";
  main();
});
