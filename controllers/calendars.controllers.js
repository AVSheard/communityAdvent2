const { getCalendars } = require("../models/calendars.models");

const requestCalendars = (request, response, next) => {
	getCalendars().then((calendars) => {
		response.status(200).send({ calendars });
	});
};

module.exports = { requestCalendars };
