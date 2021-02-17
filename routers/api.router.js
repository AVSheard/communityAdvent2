const { request } = require("express");
const usersRouter = require("./users.router");
const { invalidMethod } = require("../errors/errors");
const { requestJSON } = require("../controllers/api.controllers");

apiRouter = require("express").Router();

apiRouter.use("/users", usersRouter);

apiRouter.route("/").get(requestJSON).all(invalidMethod);

module.exports = apiRouter;
