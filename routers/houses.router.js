const { requestHouses } = require("../controllers/houses.controllers");

housesRouter = require("express").Router();

housesRouter.route("/").get(requestHouses);

module.exports = housesRouter;
