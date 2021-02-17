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
	});

	describe("/users", () => {
		it("GET - 200 for successful request for list of users", () => {
			return request(app)
				.get("/api/users")
				.expect(200)
				.then((res) => {
					res.body.users.forEach((user) => {
						expect(user).to.have.all.keys([
							"username",
							"email",
							"password",
							"avatar_url",
						]);
					});
				});
		});
	});
});
