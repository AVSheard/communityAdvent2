const express = require("express");
const apiRouter = require("./routers/api.router");
const cors = require("cors");
const bodyParser = require("body-parser");
const { customErrors } = require("./errors/errors");

const app = express();

app.use(cors());

app.use(bodyParser());

app.use("/api", apiRouter);

app.use(customErrors);

module.exports = app;
