const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const url = req.url;
  let message = "";
  if (url === "/") {
    if (fs.existsSync("message.txt")) {
      message += fs.readFileSync("message.txt").toString();
    } else {
      message += "No chats is going on... ";
    }
  }
  res.send(
    `<form action="/" method="POST"><p>${message}</p><input type="text" name="message"><input type="submit" value="send" ></intput></form>`
  );
});

router.post("/", (req, res) => {
  const data = req.body.message;
  const username = req.cookies.username;
  if (!fs.existsSync("message.txt")) {
    fs.writeFileSync("message.txt", `${username}: ${data}`);
  } else {
    fs.appendFileSync("message.txt", ` /${username} :`);
    fs.appendFileSync("message.txt", `${data}`);
  }
  res.redirect("/");
});

module.exports = router;
