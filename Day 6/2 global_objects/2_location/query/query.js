// add the following to the url in you browser
// ?name=estif&gender=male&dance_partner=nick&lango=javascript&lango=programming

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

params.forEach((ele) => {
  console.log(ele);
});

params.getAll("lango");

const dance_partner = params.get("dance_partner");
const myName = params.get("name");
console.log(`${myName} has Dance partner ${dance_partner}`);

console.log(params); // check the prototype to get the list of things you can do with this object
