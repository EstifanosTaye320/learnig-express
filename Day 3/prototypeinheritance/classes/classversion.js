class Alien {
    constructor(name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = "kodo";
    }
    fly () {
        console.log("this alien can fly");
    }
    sayphrase() {
        console.log(this.phrase);
    }
}

const alen = new Alien("alen", "Hi, my name is alen and i come in peace");
console.log(alen.name);
alen.sayphrase()
alen.fly()