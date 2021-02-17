const chai = require("chai");
const { expect } = chai;
const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

process.env.NODE_ENV = "test";

describe("/api", () => {
	beforeEach(() => connection.seed.run());
	after(() => connection.destroy());

	describe("/", () => {
		it("GET - 200 for successful request for JSON list of available api endpoints", () => {
			return request(app).get("/api").expect(200);
		});
		it("405 for invalid methods on /api", () => {
			const invalidMethods = ["patch", "put", "delete", "post"];
			const methodPromises = invalidMethods.map((method) => {
				return request(app)
					[method]("/api")
					.expect(405)
					.then(({ body: { msg } }) => {
						expect(msg).to.equal("method not allowed");
					});
			});
			return Promise.all(methodPromises);
		});
	});

	describe("/users", () => {
		it("GET - 200 for successful request for list of users", () => {
			return request(app)
				.get("/api/users")
				.expect(200)
				.then((res) => {
					res.body.users.forEach((user) => {
						expect(user).to.have.all.keys(["username", "email", "avatar_url"]);
					});
				});
		});
		it("405 for invalid methods on /api/users", () => {
			const invalidMethods = ["patch", "put", "delete", "post"];
			const methodPromises = invalidMethods.map((method) => {
				return request(app)
					[method]("/api")
					.expect(405)
					.then(({ body: { msg } }) => {
						expect(msg).to.equal("method not allowed");
					});
			});
			return Promise.all(methodPromises);
		});
	});
});
