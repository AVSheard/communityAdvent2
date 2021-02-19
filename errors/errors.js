const invalidMethod = (req, res, next) => {
	res.status(405).send({ msg: "method not allowed" });
};

const customErrors = (err, req, res, next) => {
	res.status(err.status).send(err);
};

module.exports = { invalidMethod, customErrors };
