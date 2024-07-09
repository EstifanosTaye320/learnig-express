// replace .a, .b, .c, .d with the following below and see what happens
// .display, #container > .display, div.display, div#container > div.display

const display = document.querySelector(".a"); // code here
const display1 = document.querySelector(".b"); // code here
const display2 = document.querySelector(".c"); // code here
const display3 = document.querySelector(".d"); // code here

console.log(display, display1, display2, display3);

// Experement with firstElementChild, lastElementChild, previousElementSibling and nextElementSibling
// consider the following code

const container = document.querySelector("#container");
const controls = document.querySelector(".controls");

let nexttocontrols; // code here
let insidecontainer; // code here

if (nexttocontrols) {
    console.log(nexttocontrols.classList);
}
if (insidecontainer) {
    console.log(insidecontainer.classList);
}

// Use querySelectorAll to find all the elements that apply

let children; // find all children of container
let displays; // find all elements with class name display

console.log(children, displays);