// import from express the Router
const { Router } = require("express");

// routes
const usersRouter = require("./user.routes");

// initialize Router
const routes = Router();

// call the routes
routes.use("/users", usersRouter);

// export routes
module.exports = routes;
