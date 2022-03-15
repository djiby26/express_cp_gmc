const express = require("express");
const app = express();
// const expressLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 3000;
const path = require("path");
app.set("view engine", "ejs");

app.use("/css", express.static(path.join(__dirname + "/public")));
const date = new Date();
const hours = date.getHours();
const day = date.getDay();
app.all("*", (req, res, next) => {
  if (hours <= 17 && hours >= 9 && day < 6) {
    next();
  } else {
    res.render("unavailable");
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => console.log("Server running at localhost:" + port));
