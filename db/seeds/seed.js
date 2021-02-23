const { userData, calendarData, houseData } = require("../data/index.js");

exports.seed = function (knex) {
	return knex.migrate
		.rollback()
		.then(() => knex.migrate.latest())
		.then(() => {
			return knex("users").insert(userData).returning("*");
		})
		.then(() => {
			return knex("calendars").insert(calendarData).returning("*");
		})
		.then(() => {
			return knex("houses").insert(houseData).returning("*");
		});
};
