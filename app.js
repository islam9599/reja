console.log("Web server boshlash!!!");
const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

//Mongo DB call

const db = require("./server").db();
console.log(db);

let user;

fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
  console.log(data);
});
// 1. Kirish codelari
// app.use(express.static("public"));
// app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));

// console.log(express.static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Sessions

// 3. Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing code

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});
app.post("/create-item", (req, res) => {
  // console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
