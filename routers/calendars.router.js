const { requestCalendars } = require("../controllers/calendars.controllers");
const { invalidMethod } = require("../errors/errors");

calendarsRouter = require("express").Router();

calendarsRouter.route("/").get(requestCalendars).all(invalidMethod);

module.exports = calendarsRouter;
