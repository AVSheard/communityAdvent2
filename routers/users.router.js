const { requestUsers } = require("../controllers/users.controllers");
const { invalidMethod } = require("../errors/errors");

usersRouter = require("express").Router();

usersRouter.route("/").get(requestUsers).all(invalidMethod);

module.exports = usersRouter;
