const { requestUsers } = require("../controllers/users.controllers");
const { invalidMethod } = require("../errors/errors");

usersRouter = require("express").Router();

usersRouter.route("/").get(requestUsers);

module.exports = usersRouter;
