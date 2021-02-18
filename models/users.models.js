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

const getUser = (userUsername) => {
	return connection
		.select("*")
		.from("users")
		.where({ username: userUsername })
		.returning("*")
		.then((user) => {
			delete user[0]["password"];
			return user[0];
		});
};

module.exports = { getUsers, getUser };
