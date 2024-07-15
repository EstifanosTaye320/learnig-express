const fsPromises = require("fs").promises;
const path = require("path");
/*
const create_rename = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "async_await.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromises.writeFile(
      path.join(__dirname, "files", "async_await.txt"),
      "overwriting file"
    );
    // console.log("file overwritten");

    await fsPromises.appendFile(
      path.join(__dirname, "files", "async_await.txt"),
      "\nNew content"
    );
    // console.log("file updated");

    await fsPromises.rename(
      path.join(__dirname, "files", "async_await.txt"),
      path.join(__dirname, "files", "new_async_await.txt")
    );
    // console.log("renaming complete");

    const newdata = await fsPromises.readFile(
      path.join(__dirname, "files", "new_async_await.txt"),
      "utf8"
    );
    console.log(newdata);

    console.log("Operation complete");
  } catch (err) {
    console.error(err);
  }
};

create_rename();
*/

const deletefile = async () => {
  fsPromises.unlink(path.join(__dirname, "files", "delete.txt"));
  console.log("Delete Complete");
};

deletefile();
