// import express
const express = require("express");

// start express
const app = express();

// send a page message (text)
app.get("/message", (req, res) => {
  res.send("Hello World");
});
// set a port
const PORT = 3333;
app.listen(PORT, () => console.log("server is running"));
