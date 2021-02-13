exports.up = function (knex) {
	return knex.schema.createTable("users", (userTable) => {
		userTable.string("username").primary().unique();
		userTable.string("email").notNullable();
		userTable.string("password").notNullable();
		userTable.string("avatar_url");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
