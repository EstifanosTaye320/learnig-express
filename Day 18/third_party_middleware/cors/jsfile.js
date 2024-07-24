const button = document.querySelector("button");

button.onclick = function () {
  fetch("http://localhost:3000")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
