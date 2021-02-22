exports.up = function (knex) {
	return knex.schema.createTable("calendars", (calendarTable) => {
		calendarTable.increments("calendar_id").primary();
		calendarTable.string("calendarName").notNullable();
		calendarTable.string("centreName").notNullable();
		calendarTable.float("centreLocLong").notNullable();
		calendarTable.float("centreLocLat").notNullable();
		calendarTable.string("picture_url");
		calendarTable.string("admin").references("users.username").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("calendars");
};
