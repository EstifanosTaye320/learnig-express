function readfile(path, callback) {
    const fs = require("fs");

    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            callback(err, null);
        }else {
            callback(null, data);
        }
    })
}

readfile("./Day 3/HOF-callback/readfile/reading.txt", (err, data) => {
    if (err) { 
        console.log("This is the error" + " " + err);
    } else {
        console.log(data);
    }
})