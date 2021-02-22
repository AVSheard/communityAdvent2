const connection = require("../db/connection");

const getCalendars = () => {
	return connection.select("*").from("calendars").returning("*");
};

const getCalendar = (id) => {
	return connection
		.select("*")
		.from("calendars")
		.where({ calendar_id: id })
		.returning("*");
};

module.exports = { getCalendars, getCalendar };
