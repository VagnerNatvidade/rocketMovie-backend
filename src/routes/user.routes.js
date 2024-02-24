// import from express the Router
const { Router } = require("express");

// initialize Router
const usersRoutes = Router();

// import controller
const UsersController = require("../controllers/UsersController");

// new instance
const userController = new UsersController();

// call a controller x
usersRoutes.post("/", userController.create);

// export file
module.exports = usersRoutes;
