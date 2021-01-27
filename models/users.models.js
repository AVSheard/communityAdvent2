const connection = require("../db/connection");

const getUsers = () => {
	return connection.select("*").from("users").returning("*");
};

module.exports = { getUsers };
