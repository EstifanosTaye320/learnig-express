// used to get data from req.headers.cookies and place them in req.cookie
// also used to resend cookies in the response object back to the user
const cookieParser = require("cookie-parser");

app.use(cookieParser("your-secret-key"));

app.get("/profile", (req, res) => {
  if (req.cookies.user) {
    // Access user data from the cookie
    console.log(`Welcome, ${req.cookies.user}!`);
  } else {
    // User not logged in
    res.redirect("/login");
  }
});
