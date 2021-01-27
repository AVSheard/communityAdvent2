const usersRouter = require("./users.router");

apiRouter = require("express").Router();

apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
