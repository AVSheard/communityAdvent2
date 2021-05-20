const connection = require("../db/connection");

const getUsers = () => {
	// 	return { mUser: "anthonySheard" };
	console.log("model");
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
			if (user.length === 0)
				return Promise.reject({ status: 404, msg: "Username does not exist" });
			delete user[0]["password"];
			return user[0];
		});
};

module.exports = { getUsers, getUser };
