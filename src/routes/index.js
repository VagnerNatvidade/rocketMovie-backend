const { Router } = require("express");

const usersRouter = require("./user.routes");
const notesRouter = require("./notes.routes");
const tagsRoutes = require("./tags.routes");
const sessionRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRoutes);
routes.use("/sessions", sessionRoutes);

module.exports = routes;
