const bodyParser = require("body-parser");
const {
	requestUsers,
	requestUser,
} = require("../controllers/users.controllers");
const { invalidMethod } = require("../errors/errors");

usersRouter = require("express").Router();

usersRouter.use(bodyParser.json());
usersRouter.use(bodyParser.urlencoded({ extended: true }));

usersRouter.route("/:username").get(requestUser).all(invalidMethod);

usersRouter.route("/").get(requestUsers).all(invalidMethod);

module.exports = usersRouter;
