// import express
const express = require("express");

// start express
const app = express();
// set the format we send the information
app.use(express.json());

// send a page message (text)
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  res.json({ name, email, password });
});
// set a port
const PORT = 3333;
app.listen(PORT, () => console.log("server is running"));
