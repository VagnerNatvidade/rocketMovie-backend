// import express
const express = require("express");

// import routes from ./routes/index.js
const routes = require("./routes");

// initialize express
const app = express();
// set the format we send the information
app.use(express.json());

// call routes
app.use(routes);

// set a port
const PORT = 3333;
app.listen(PORT, () => console.log("server is running"));
