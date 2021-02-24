const {
	requestHouses,
	requestHouse,
} = require("../controllers/houses.controllers");
const { invalidMethod } = require("../errors/errors");

housesRouter = require("express").Router();

housesRouter.route("/:house_id").get(requestHouse);

housesRouter.route("/").get(requestHouses).all(invalidMethod);

module.exports = housesRouter;
