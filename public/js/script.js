let newElement = document.createElement("p");
newElement.textContent = "This is the new element";

let theexistingdiv = document.getElementById("duck");
theexistingdiv.appendChild(newElement);