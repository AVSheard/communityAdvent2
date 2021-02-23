exports.up = function (knex) {
	return knex.schema.createTable("houses", (houseTable) => {
		houseTable.increments("house_id").primary();
		houseTable.string("houseName").notNullable();
		houseTable.integer("day");
		houseTable.float("houseLongLoc");
		houseTable.float("houseLatLoc");
		houseTable
			.integer("calendar_id")
			.references("calendars.calendar_id")
			.notNullable();
		houseTable.string("housePicture");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("houses");
};
