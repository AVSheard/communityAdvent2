const usersRouter = require("./users.router");
const calendarsRouter = require("./calendars.router");
const housesRouter = require("./houses.router");
const bodyParser = require("body-parser");
const { invalidMethod } = require("../errors/errors");
const { requestJSON } = require("../controllers/api.controllers");

apiRouter = require("express").Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apiRouter.use("/users", usersRouter);

apiRouter.use("/calendars", calendarsRouter);

apiRouter.use("/houses", housesRouter);

apiRouter.route("/").get(requestJSON).all(invalidMethod);

module.exports = apiRouter;
