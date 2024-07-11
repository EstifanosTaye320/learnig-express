// Asynchronus coding

// A better version of fetch() simulation

function fetchdata() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: 1, name: "estif", pet: "cat", otherpet: "dog" });
    }, 2000);
    setTimeout(() => {
      rej(new SyntaxError());
    }, 3000);
  });
}

// option 1: use the Promise.then().catch() method of handling Promises
fetchdata()
  .then((data) => {
    console.log(
      "this is the data " +
        "{" +
        `id: ${data.id}, name: ${data.name}, pet: ${data.pet}, otherpet: ${data.otherpet}` +
        "}"
    );
    clearInterval(otherstuff);
  })
  .catch((err) => {
    console.log("this is the error " + err);
  });

// option 2: use the async await approch of handling Promises
async function main() {
  try {
    const data = await fetchdata();
    console.log(
      "this is the data " +
        "{" +
        `id: ${data.id}, name: ${data.name}, pet: ${data.pet}, otherpet: ${data.otherpet}` +
        "}"
    );
    clearInterval(otherstuff);
  } catch (err) {
    console.log("this is the error: " + err);
  }
}

main();

const otherstuff = setInterval(function () {
  console.log("Do other stuff until the fetching is done");
}, 1000);

// Exercise
// count the number of callback functions and higherorder functions
// run option 1 and option 2 separatly, understand the 2 options and rewrite the code
// what is the use of the .then() method?
// what is the use of the await keyword?
// what is the difference between .then() and await?
