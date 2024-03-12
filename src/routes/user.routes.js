// import from express the Router
const { Router } = require("express");

// initialize Router
const usersRoutes = Router();

// import controller
const UsersController = require("../controllers/UsersController");

// new instance
const usersController = new UsersController();

// call a controller x
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

// export file
module.exports = usersRoutes;
