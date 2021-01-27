const ENV = process.env.NODE_ENV || "development";
const { DB_URL } = process.env;
const loginData = require("./loginData");

const baseConfig = {
	client: "pg",
	migrations: {
		directory: "./db/migrations",
	},
	seeds: {
		directory: "./db/seeds",
	},
};

const customConfig = {
	development: {
		connection: {
			...loginData,
			database: "community_advent",
		},
	},
	test: {
		connection: {
			...loginData,
			database: "community_advent_test",
		},
	},
	production: {
		connection: `${DB_URL}?ssl=true`,
	},
};

module.exports = { ...customConfig[ENV], ...baseConfig };
