const passport = require("passport"); // for handling authentication process like jwt, OAuth, local stratagy, SAML ...
const express = require("express");
const app = express();

app.use(passport.initialize()); // setup configuration for passport
app.use(passport.session()); // enable passport session managment capabilities

app.listen(3000, function () {
  console.log("server at port 3000");
});
