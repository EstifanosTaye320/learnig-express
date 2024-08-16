// allow storing of session data in mongodb database
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db.connection }), // db is your mongoose connection
  })
);
