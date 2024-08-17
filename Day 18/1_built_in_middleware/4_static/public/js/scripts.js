const button = document.querySelector("button");
const title = document.querySelector("h1");

button.onclick = function () {
  title.style.color = title.style.color === "red" ? "white" : "red";
};
