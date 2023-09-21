console.log("Web server boshlash!!!");
const express = require("express");
const app = express();
const htpp = require("http");

// 1. Kirish codelari

app.use(express.static("public"));
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

// 2. Sessions

// 3. Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing code

app.get("/hello", function (req, res) {
  //   res.end("Hello world!");
  //   res.end(`<h1 style= 'background: blue' >Hello world!!!</h1>`);
  res.end(`<h1 >Hello world!!!</h1>`);
});
app.get("/git", function (req, res) {
  //   res.end("Hello world!");
  //   res.end(`<h1 style= 'background: blue' >Hello world!!!</h1>`);
  res.end(`<h1 >Siz sovgalar sahiasidasiz!!!</h1>`);
});

const server = htpp.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT} `);
});
