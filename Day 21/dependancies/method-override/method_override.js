// to make using html forms more flexable
// allow the use of put and delete on forms that only allow get and post
// this has something to do with setting the proper heading on the x-http-method-override header
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
