const { getHouses, getHouse } = require("../models/houses.models");

const requestHouses = (request, response, next) => {
	getHouses(request.query.calendar_id)
		.then((houses) => {
			response.status(200).send({ houses });
		})
		.catch((err) => {
			next(err);
		});
};

const requestHouse = (request, response, next) => {
	getHouse(request.query.house_id)
		.then((house) => {
			response.status(200).send({ house });
		})
		.catch((err) => {
			next(err);
		});
};

module.exports = { requestHouses, requestHouse };
