const value = document.querySelector("#value");
const input = document.querySelector("#input");
const body = document.querySelector("#messagestore");
const form = document.querySelector("#form");

form.onsubmit = submitting;
input.addEventListener("input", inputting);
form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitting(event);
  }
});

function submitting(event) {
  event.preventDefault();

  fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: value.textContent,
    }),
  }).then((res) => {
    if (res.ok) {
      console.log("message added correctly");
      refreshpage();
    } else {
      console.log("something went wrong");
    }
  });

  value.textContent = "";
  input.value = "";
}

function inputting() {
  value.textContent = input.value;
}

function createmessage(mess) {
  const new_message = document.createElement("p");
  new_message.textContent = mess.message;
  body.appendChild(new_message);
}

function refreshpage() {
  fetch("http://localhost:3000/messages")
    .then((res) => res.json())
    .then((data) => {
      body.innerHTML = "";
      data.forEach((message) => createmessage(message));
    });
}

refreshpage();
