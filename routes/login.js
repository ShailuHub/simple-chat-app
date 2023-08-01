const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    '<form action="/login" method="POST"><input type="text" name="username"><input type="submit" value="login"></form>'
  );
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  res.cookie("username", username);
  res.redirect("/");
});

module.exports = router;
