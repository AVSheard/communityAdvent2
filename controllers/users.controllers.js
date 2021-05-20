const { getUsers, getUser } = require("../models/users.models");

const requestUsers = (request, response, next) => {
	response.status(200).send({ user: "anthony" });
	console.log("controller");
	// getUsers().then((users) => {
	// 	response.status(200).send({ users });
	// });
};

const requestUser = (request, response, next) => {
	getUser(request.params.username)
		.then((user) => {
			response.status(200).send({ user });
		})
		.catch((err) => {
			next(err);
		});
};

module.exports = { requestUsers, requestUser };
