// console.log("Web server boshlash!!!");
const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

//Mongo DB call

const db = require("./server").db();
const mongodb = require("mongodb");
// console.log(db);

let user;

fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    // console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
  // console.log(data);
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
  // console.log("User entered /create-item");
  // console.log(req.body);

  // console.log(req.body);
  //res.json({ test: "success" });
  const newReja = req.body.reja;
  db.collection("plans").insertOne({ reja: newReja }, (err, data) => {
    // if (err) {
    //   console.log(err);
    //   res.end("Sthg went wrong!");
    // } else {
    //   res.end("Successfully added");
    // }
    // console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  // console.log(id);
  // res.end("Done!!!");
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body.id;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
  // res.end("Done");
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "Hamma rejalarni ochirildi" });
    });
  }
});

app.get("/", function (req, res) {
  // console.log("User entered /");
  db.collection("plans")
    .find()
    .toArray(function (err, data) {
      if (err) {
        console.log("ERROR", err);
        res.end("Smth went wrong!");
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
  // res.render("reja");
});

module.exports = app;
