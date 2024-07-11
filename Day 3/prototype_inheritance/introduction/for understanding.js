function Animal(name) {
    this.name =name;
}

Animal.prototype.speck = (noise) => {
    console.log("Animal noise: " + noise + " noise");
}

function Cat(name, color) {
    Animal.call(this, name);
    this.color = color;
}

function Dog(name, bread) {
    Animal.call(this, name);
    this.bread = bread;
}

Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;
Dog.prototype.constructor = Dog;

const myDog = new Dog("spike", "bull dog");
const myCat = new Cat("tom", "blue");

console.log(myDog.name, myDog.bread);
console.log(myCat.name, myCat.color);

myDog.speck(myDog.name);
myCat.speck(myCat.name);