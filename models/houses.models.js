const connection = require("../db/connection");
const { doesItemExist } = require("./middleware.models");

const getHouses = (reqCalID) => {
	// check that reqCalID is a number and reject if not
	if (reqCalID && isNaN(Number(reqCalID)))
		return Promise.reject({
			status: 400,
			msg: "Invalid calendar_id",
		});

	// check that value of reqCalId exists in database
	let calIdReal = true;
	if (reqCalID) calIdReal = doesItemExist(reqCalID, "calendar_id", "calendars");

	// reject if value of reqCalID does not exist in database
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

const getHouse = (houseID) => {
	return connection
		.select("*")
		.from("houses")
		.where({ house_id: houseID })
		.returning("*");
};

module.exports = { getHouses, getHouse };
