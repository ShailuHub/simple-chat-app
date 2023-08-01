const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 3000;

const loginRoute = require("./routes/login.js");
const homeRoute = require("./routes/home.js");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(loginRoute);
app.use(homeRoute);
app.listen(port, () => {
  console.log(`Server is workin on the port: ${port}`);
});
