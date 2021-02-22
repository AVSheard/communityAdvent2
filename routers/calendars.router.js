const { requestCalendars } = require("../controllers/calendars.controllers");

calendarsRouter = require("express").Router();

calendarsRouter.route("/").get(requestCalendars);

module.exports = calendarsRouter;
