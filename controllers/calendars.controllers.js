const { getCalendars, getCalendar } = require("../models/calendars.models");

const requestCalendars = (request, response, next) => {
	getCalendars().then((calendars) => {
		response.status(200).send({ calendars });
	});
};

const requestCalendar = (request, response, next) => {
	getCalendar(request.params.calendar_id)
		.then((calendar) => {
			response.status(200).send({ calendar });
		})
		.catch((err) => {
			next(err);
		});
};

module.exports = { requestCalendars, requestCalendar };
