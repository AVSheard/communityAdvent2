const connection = require("../db/connection");
const { password } = require("../loginData");

const getUsers = () => {
	return connection
		.select("*")
		.from("users")
		.returning("*")
		.then((users) => {
			return users.map((user) => {
				delete user["password"];
				return user;
			});
		});
};

const getUser = () => {
	return connection
		.select("*")
		.from("users")
		.where({ username: userUsername })
		.returning("*")
		.then((user) => {
			delete user["password"];
			return user;
		});
};

module.exports = { getUsers, getUser };
