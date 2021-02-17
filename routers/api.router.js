const { request } = require("express");
const usersRouter = require("./users.router");
const { requestJSON } = require("../controllers/api.controllers");

apiRouter = require("express").Router();

apiRouter.use("/users", usersRouter);

apiRouter.route("/").get(requestJSON);

module.exports = apiRouter;
