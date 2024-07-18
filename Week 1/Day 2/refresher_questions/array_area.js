// 1. declaration of an array
let array = [];
let array1 = new Array();
// console.log(Array.isArray(array), Array.isArray(array1));

// 2. testing out array.push() array.unshift() array.pop() array.shift()
array.push("estif");
let myName = array.pop();
// console.log(myName, array);

array.unshift("ted");
myName = array.shift();
// console.log(myName, array);

array.push("estif", "ted", "martin", "coco");
// console.log(array);

let myNames = array.splice(2, 2);
// console.log(myNames, array);
array.splice(1, 0, "nick", "henry");

// console.log(array);
array1.push("alister", "pug", "narly");

let new_array = array.concat(array1);
// console.log(array, array1, new_array);

new_array = [...new_array, "new_name"];
// console.log(new_array);

new_array = new_array.filter((ele) => ele.length < 4);
// console.log(new_array);

// console.log(array);
delete array[1];
// console.log(array);

// for (i = 0; i < array.length; i++) {console.log(array[i]);}

// for (element of array) {console.log(element);}

// array.forEach((ele) => {console.log(ele);});

// array.map((ele) => {console.log(ele);});

// array.filter((ele) => {console.log(ele);});

// let accumulator = array.reduce((arru, ele) => {console.log(ele);}, "");

// let i = 0;
// while (i < array.length) {
//   console.log(array[i]);
//   i++;}

// let i = 0;
// do {
//   console.log(array[i]);
//   i++;
// } while (i < array.length);

let index = array.indexOf("estif");
// console.log(index);

let exists = array.indexOf("not in array");
// console.log(exists);

exists = array.includes("estif");
// console.log(exists);

exists = array.some((ele) => ele == "estif");
// console.log(exists);

exists = array.find((ele) => ele == "estif");
console.log(exists);
