function main() {
  try {
    fetch("http://localhost:3000/messages")
      .then((data) => data.json())
      .then((messages) => {
        messages.forEach((mess) => console.log(mess));
      });
  } catch (error) {
    console.error("Error:", error);
    console.log("An error occurred while fetching messages.");
  }
}

main();
