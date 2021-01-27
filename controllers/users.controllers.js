const { getUsers } = require("../models/users.models");

const requestUsers = (request, response, next) => {
	getUsers().then((users) => {
		response.status(200).send({ users });
	});
};

module.exports = { requestUsers };
