const button = document.querySelector("button");
const secondButton = document.getElementById("second-button");

button.onclick = function () {
  fetch("http://localhost:3000/")
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
};

secondButton.onclick = function () {
  i = 0;

  while (i < 100) {
    fetch("http://localhost:3000/")
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
    i++;
  }
};
