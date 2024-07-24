const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");

form.onsubmit = function (event) {
  event.preventDefault();
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: input.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
};

button.onclick = function () {
  // cookies are sent automatically with every request
  fetch("http://localhost:3000/profile")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
