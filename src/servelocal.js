const express = require("express")
const app = express();

app.use(express.static('../public'));

app.get('/', (req, res) => {
    res.send("options: /index.html, /style.css, /download.jfif, /script.js")
})

app.listen(3000, () => {
    console.log("let the local serving begin");
})