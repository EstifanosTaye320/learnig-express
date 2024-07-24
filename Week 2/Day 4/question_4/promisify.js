function fetching() {
  return new Promise((res, rej) => {
    const responce = fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (responce) {
      res(responce);
    } else {
      rej(new Error("Problem fetching"));
    }
  });
}

fetching()
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
