const connection = require("../db/connection");
const { doesItemExist } = require("./middleware.models");

const getHouses = (reqCalID) => {
	let calIdReal = true;

	if (reqCalID) calIdReal = doesItemExist(reqCalID, "calendar_id", "calendars");
	return Promise.all([calIdReal]).then((booleans) => {
		if (reqCalID && !booleans[0]) {
			return Promise.reject({ status: 404, msg: "Calendar_id does not exist" });
		}

		return connection
			.select("*")
			.from("houses")
			.returning("*")
			.modify((query1) => {
				if (reqCalID) {
					query1.where("houses.calendar_id", reqCalID);
				}
			});
	});
};

module.exports = { getHouses };
