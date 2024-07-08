// Example one
const arr = [1,2, 3, 4, 5];
const newarr = arr.filter((ele) => ele % 2 == 0);

console.log("old arr: " + arr);
console.log("new arr: " + newarr);

// Example two
const objarr = [
    {id: 1, name: "estif", work: "something", pet: "dog"},
    {id: 1, name: "tom", work: "chase", pet: "mouse"},
    {id: 1, name: "jerry", work: "counter chase", pet: "roach"},
    {id: 1, name: "spike", work: "chase", pet: "cat"},
]

const newobjarr = objarr.filter((ele) => ele.work === "chase");

console.log(objarr);
console.log(newobjarr);