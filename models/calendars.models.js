const connection = require("../db/connection");

const getCalendars = () => {
	return connection.select("*").from("calendars").returning("*");
};

module.exports = { getCalendars };
