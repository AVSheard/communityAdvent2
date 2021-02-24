const { requestHouses } = require("../controllers/houses.controllers");
const { invalidMethod } = require("../errors/errors");

housesRouter = require("express").Router();

housesRouter.route("/").get(requestHouses).all(invalidMethod);

module.exports = housesRouter;
