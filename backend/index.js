const express = require("express");

var app = express();

app.get("/", (req, res) => {
  return res.json("Hello MB Labs");
});

app.listen(3333);
