const { requestCalendars } = require("../controllers/calendars.controllers");
const { invalidMethod } = require("../errors/errors");

calendarsRouter = require("express").Router();

calendarsRouter.route("/calendar_id").get(requestCalendar);

calendarsRouter.route("/").get(requestCalendars).all(invalidMethod);

module.exports = calendarsRouter;
