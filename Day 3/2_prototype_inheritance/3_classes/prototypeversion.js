// open the classversion.js file and do the exercise
function Alien(name, phrase) {
  this.name = name;
  this.phrase = phrase;
  this.species = "kodo";
}

Alien.prototype.fly = function () {
  console.log("This alien can fly");
};

// avoid arrow functions here
Alien.prototype.sayPhrase = function () {
  console.log(this.phrase);
};

const alen = new Alien("alen", "hello, my name is alen and i can fly");

console.log(alen.name, alen.species);
alen.fly();
alen.sayPhrase();

// Exercise
// run this code, understand it, and rewrite the contents
