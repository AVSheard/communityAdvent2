const { getHouses } = require("../models/houses.models");

const requestHouses = (request, response, next) => {
	getHouses().then((houses) => {
		response.status(200).send({ houses });
	});
};

module.exports = { requestHouses };
