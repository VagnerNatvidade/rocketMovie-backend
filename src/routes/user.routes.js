// import from express the Router
const { Router } = require("express");

// initialize Router
const usersRoutes = Router();

// send a page message (text)
usersRoutes.post("/", (req, res) => {
  const { name, email, password } = req.body;

  res.json({ name, email, password });
});

// export file
module.exports = usersRoutes;
