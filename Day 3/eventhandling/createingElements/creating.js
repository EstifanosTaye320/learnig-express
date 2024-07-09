// practice creating and inserting elements in to html
// creating: document.createElement(tagName)
// inserting: container.appendChile(new_element), container.insertBefor(new_element, reference_element)
// remove: container.removeElement(child)

let parent = document.getElementById("parent");
let reference = document.getElementById("refe");

let new_element= document.createElement('p'); // create new p element

if (new_element) {
    new_element.textContent = "this is the new p element"
}

parent; // append new p element to the end of parent

parent; // remove the new p element

parent; // add the new element before the reference

