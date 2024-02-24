// import AppError
const AppError = require("../utils/AppError");

// processing of user request
class UsersController {
  create(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      throw new AppError("Name is required");
    }

    res.json({ name, email, password });
  }
}

module.exports = UsersController;
