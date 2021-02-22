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
			if (calendar.length === 0)
				return Promise.reject({
					status: 404,
					msg: "Calendar_id does not exist",
				});
			return calendar[0];
		});
};

module.exports = { getCalendars, getCalendar };
