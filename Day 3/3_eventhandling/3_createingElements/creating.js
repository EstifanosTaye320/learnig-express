// practice creating and inserting elements in to html
// creating: document.createElement(tagName)
// inserting: container.appendChile(new_element), container.insertBefor(new_element, reference_element)
// remove: container.removeElement(child)

let parent = document.getElementById("parent");
let reference = document.getElementById("refe");

let new_element = document.createElement("p"); // create new p element

if (new_element) {
  new_element.textContent = "this is the new p element";
}

parent; // code here: append new p element to the end of parent

parent; // code here: remove the new p element

parent; // code here: add the new element before the reference

// Exercise
// create a div element that has an h1 tag and a p tag inside:
/** - h1 has the content "div header"
    - p has the content "hello div header" */
