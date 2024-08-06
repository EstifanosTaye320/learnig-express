// add console.log function to log important data in the code to understand what the enter_here function does

function enter_here(data) {
  data.name = "ted";
  console.log("Data has been processed");
}

function main() {
  const data = { name: "estif", pet: "cat", otherpet: "dog" };
  enter_here(data);
}

main();
