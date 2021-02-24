const connection = require("../db/connection");

const getHouses = () => {
	return connection.select("*").from("houses").returning("*");
};

module.exports = { getHouses };
