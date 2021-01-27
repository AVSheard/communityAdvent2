const { requestUsers } = require("../controllers/users.controllers");

usersRouter = require("express").Router();

usersRouter.route("/").get(requestUsers);

module.exports = usersRouter;
