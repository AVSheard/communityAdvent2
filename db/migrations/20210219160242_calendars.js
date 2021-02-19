exports.up = function (knex) {
	return knex.schema.createTable("calendars", (calendarTable) => {
		calendarTable.increments("calendar_id").primary();
		calendarTable.string("name").notNullable();
		calendarTable.string("centreName").notNullable();
		calendarTable.float("centreLocLat").notNullable();
		calendarTable.float("centreLocLong").notNullable();
		calendarTable.string("picture_url").notNullable();
		calendarTable.string("admin").references("users.username").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("calendars");
};
