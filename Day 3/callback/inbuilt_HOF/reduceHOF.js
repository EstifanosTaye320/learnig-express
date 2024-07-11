const arr = [1, 2, 3, 4, 5];
const objarr = [
  { id: 1, name: "estif", work: "something", age: 22, hassmile: true },
  { id: 2, name: "ted", work: "thing some", age: 20, otherpet: "dog" },
  { id: 3, name: "norton", work: "not something", age: 1, pet: "cat" },
  { id: 4, name: "john", work: "some that is thing", age: 28 },
];
const shoppingCart = [
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Xiomi", price: 2.99, quantity: 2 },
  { name: "Samsung", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 4.99, quantity: 4 },
  { name: "Nokia", price: 4.99, quantity: 4 },
];

// Example 1
const sumofarr = arr.reduce((result, current) => result + current);
const max = arr.reduce((total, curr) => (total > curr ? total : curr));

console.log(arr, sumofarr);
console.log(`max: ${max}, arr: ${arr}`);
console.log();

// Example 2
const sumofage = objarr.reduce((result, current) => result + current.age, 0);
const ages = objarr.map((ele) => ele.age);
const merg = objarr.reduce((acc, obj) => {
  return { ...acc, ...obj };
}, {});

console.log(ages, sumofage);
console.log(merg);
console.log();

// Example 3
const products = shoppingCart.reduce((proGroup, curr) => {
  const name = curr.name;
  if (proGroup[name] == null) {
    proGroup[name] = [];
  }
  proGroup[name].push(curr);

  return proGroup;
}, {});

console.log(products);

// Exercise:
// what is happening in Example 3?
// run Example 2 and explain what is happening?
// find other usecases for .reduce(), and code them here
