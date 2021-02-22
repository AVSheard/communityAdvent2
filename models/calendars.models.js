const connection = require("../db/connection");

const getCalendars = () => {
	return connection.select("*").from("calendars").returning("*");
};

const getCalendar = (id) => {
	return connection
		.select("*")
		.from("calendars")
		.where({ calendar_id: id })
		.returning("*")
		.then((calendar) => {
			return calendar[0];
		});
};

module.exports = { getCalendars, getCalendar };
