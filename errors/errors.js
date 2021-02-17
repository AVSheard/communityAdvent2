const invalidMethod = (req, res, next) => {
	res.status(405).send({ msg: "method not allowed" });
};

module.exports = { invalidMethod };
