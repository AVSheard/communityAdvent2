const connection = require("../db/connection");

const getHouses = (reqCalID) => {
	return connection
		.select("*")
		.from("houses")
		.returning("*")
		.modify((query1) => {
			if (reqCalID) {
				query1.where("houses.calendar_id", reqCalID);
			}
		});
};

module.exports = { getHouses };
