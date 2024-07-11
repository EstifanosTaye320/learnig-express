// Example one
const arr = [1, 3, 4, 5, 6, 2, 7, 8, 9, 10];

const newarr = arr.map((elem) => {
  return elem + 10;
});

console.log("old one: " + arr);
console.log("new one: " + newarr);

// Example two
const objarr = [
  { id: 1, name: "estif", work: "something" },
  { id: 2, name: "ted", work: "thing some" },
  { id: 3, name: "norton", work: "not something" },
  { id: 4, name: "john", work: "some that is thing" },
];

const discriptions = objarr.map(
  (emp) => `${emp.name} is famous for doing ${emp.work}`
);
for (let dis of discriptions) {
  console.log(dis);
}

// Exercise:
// Find other usecases for .map(), and code them here
