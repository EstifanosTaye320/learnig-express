const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("http://localhost:3000/convert", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
});
