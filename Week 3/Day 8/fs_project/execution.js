const fs = require("fs");

fs.watch("./command.txt", { persistent: true }, function (event, _) {
  if (event === "change") {
    fs.readFile("./command.txt", "utf-8", function (err, data) {
      if (err) {
        console.log(err.message);
      } else {
        const commands = data.split("\n");
        commands.forEach((command) => {
          const the_command = command.split(" ");
          try {
            switch (the_command[0]) {
              case "create":
                fs.writeFileSync("./" + the_command[3], "");
                break;
              case "delete":
                fs.unlinkSync("./" + the_command[3]);
                break;
              case "rename":
                fs.renameSync("./" + the_command[3], "./" + the_command[5]);
                break;
              case "add":
                fs.appendFileSync(
                  "./" + the_command[4],
                  the_command.slice(5).join(" ")
                );
                break;
              case "":
                break;
              default:
                console.log(command, "is a back request");
                break;
            }
          } catch (err) {
            console.log(err.message);
          }
        });
      }
    });
  }
});
