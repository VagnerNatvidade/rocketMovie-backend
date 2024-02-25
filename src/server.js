// import express-async-errors
require("express-async-errors");

// import AppError
const AppError = require("./utils/AppError");

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

// get error, req, res and next
app.use((error, req, res, next) => {
  // client error
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.log(error);

  // server error
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

// set a port
const PORT = 3333;
app.listen(PORT, () => console.log("server is running"));
