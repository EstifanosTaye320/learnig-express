const value = document.getElementById("value");
const input = document.getElementById("input");
const form = document.querySelector("form");
const body = document.querySelector("#messagebody");

input.addEventListener("input", function () {
  value.textContent = input.value;
});

form.onsubmit = postingmessage;
form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    postingmessage(event);
  }
});

function postingmessage(event) {
  event.preventDefault();
  try {
    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: value.textContent,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log("Message created successfully!");
        input.value = "";
        value.textContent = "";
        main();
      } else {
        console.log("Error creating message. Please try again.");
      }
    });
  } catch (error) {
    console.error("Error:", error);
    console.log("An error occurred. Please try again later.");
  }
}

function main() {
  try {
    fetch("http://localhost:3000/messages")
      .then((data) => data.json())
      .then((messages) => {
        body.innerHTML = "";
        messages.forEach((mess) => addToBody(mess));
      });
  } catch (error) {
    console.error("Error:", error);
    console.log("An error occurred while fetching messages.");
  }
}

function addToBody(mess) {
  const new_message = document.createElement("p");
  new_message.textContent = mess.message;

  body.appendChild(new_message);
}

main();
