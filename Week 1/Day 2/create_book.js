// "Title by Author, published in Year"
function createBook(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  };
}

function createingBook(title, author, year) {
  return {
    title,
    author,
    year,

    getSummary: function () {
      return `${this.title} by ${this.author}, published in ${this.year}`;
    },
  };
}

class CreateBook {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

let myBook = new createBook("Estif's Book", "Estifanos Taye", "2024");
myBook = new CreateBook("Estif's Book", "Estifanos Taye", "2024");
myBook = createingBook("Estif's Book", "Estifanos Taye", "2024");

console.log(myBook.getSummary());
