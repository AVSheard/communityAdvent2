const { request, response } = require("../app");
const { getUsers } = require("../models/users.models");

const requestUsers = (request, response, next) => {
	getUsers().then((users) => {
		response.status(200).send({ users });
	});
};

const requestUser = (request, response, next) => {
	getUsers().then((user) => {
		response.status(200).send({ user });
	});
};

module.exports = { requestUsers, requestUser };
