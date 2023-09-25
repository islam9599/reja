console.log("Web server boshlash!!!");
const express = require("express");
const app = express();
const htpp = require("http");
const fs = require("fs");

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
app.use(express.static("public"));
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
  res.render("harid");
});

const server = htpp.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT} `);
});
