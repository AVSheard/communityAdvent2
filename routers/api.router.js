const usersRouter = require("./users.router");
const calendarsRouter = require("./calendars.router");
const housesRouter = require("./houses.router");
const { invalidMethod } = require("../errors/errors");
const { requestJSON } = require("../controllers/api.controllers");

apiRouter = require("express").Router();

apiRouter.use("/users", usersRouter);

apiRouter.use("/calendars", calendarsRouter);

apiRouter.use("/houses", housesRouter);

apiRouter.route("/").get(requestJSON).all(invalidMethod);

module.exports = apiRouter;
