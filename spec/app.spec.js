const chai = require("chai");
const { expect } = chai;
const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");
const { doesItemExist } = require("../models/middleware.models");

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
					[method]("/api/users")
					.expect(405)
					.then(({ body: { msg } }) => {
						expect(msg).to.equal("method not allowed");
					});
			});
			return Promise.all(methodPromises);
		});
		describe("/:username", () => {
			it("GET - 200 for successful request for specific user", () => {
				return request(app)
					.get("/api/users/a_sheard")
					.expect(200)
					.then((res) => {
						expect(res.body.user).to.have.all.keys([
							"username",
							"avatar_url",
							"email",
						]);
					});
			});
			it("405 for invalid methods on /api/users/:username", () => {
				const invalidMethods = ["patch", "put", "delete", "post"];
				const methodPromises = invalidMethods.map((method) => {
					return request(app)
						[method]("/api/users/a_sheard")
						.expect(405)
						.then(({ body: { msg } }) => {
							expect(msg).to.equal("method not allowed");
						});
				});
				return Promise.all(methodPromises);
			});
			it("404 for requesting a user with a username that dose not exist", () => {
				return request(app)
					.get("/api/users/NOT-A-USERNAME")
					.expect(404)
					.then((res) => {
						expect(res.body.msg).to.equal("Username does not exist");
					});
			});
		});
	});

	describe("/calendars", () => {
		it("GET - 200 for successful request for list of all calendars", () => {
			return request(app)
				.get("/api/calendars")
				.expect(200)
				.then((res) => {
					res.body.calendars.forEach((calendar) =>
						expect(calendar).to.have.all.keys([
							"calendar_id",
							"calendarName",
							"centreName",
							"centreLocLong",
							"centreLocLat",
							"picture_url",
							"admin",
						])
					);
				});
		});
		it("405 for invalid methods on /api/calendars", () => {
			const invalidMethods = ["patch", "put", "delete", "post"];
			const methodPromises = invalidMethods.map((method) => {
				return request(app)
					[method]("/api/calendars")
					.expect(405)
					.then(({ body: { msg } }) => {
						expect(msg).to.equal("method not allowed");
					});
			});
			return Promise.all(methodPromises);
		});
		describe("/:calendar_id", () => {
			it("GET - 200 for successful request for specific calendar", () => {
				return request(app)
					.get("/api/calendars/1")
					.expect(200)
					.then((res) => {
						expect(res.body.calendar).to.have.all.keys([
							"calendar_id",
							"calendarName",
							"centreName",
							"centreLocLong",
							"centreLocLat",
							"picture_url",
							"admin",
						]);
					});
			});
			it("405 for invalid methods on /api/calendars/:calendar_id", () => {
				const invalidMethods = ["patch", "put", "delete", "post"];
				const methodPromises = invalidMethods.map((method) => {
					return request(app)
						[method]("/api/calendars/1")
						.expect(405)
						.then(({ body: { msg } }) => {
							expect(msg).to.equal("method not allowed");
						});
				});
				return Promise.all(methodPromises);
			});
			it("404 for requesting a calendar with a calendar_id that dose not exist", () => {
				return request(app)
					.get("/api/calendars/999999999")
					.expect(404)
					.then((res) => {
						expect(res.body.msg).to.equal("Calendar_id does not exist");
					});
			});
			it("400 for requesting a calendar with an invalid calendar_id", () => {
				return request(app)
					.get("/api/calendars/INVALID-CALENDAR-ID")
					.expect(400)
					.then((res) => {
						expect(res.body.msg).to.equal("Invalid calendar_id");
					});
			});
		});
	});

	describe("/houses", () => {
		it("GET - 200 for successful request for list of all houses", () => {
			return request(app)
				.get("/api/houses")
				.expect(200)
				.then((res) => {
					res.body.houses.forEach((house) =>
						expect(house).to.have.all.keys([
							"house_id",
							"day",
							"calendar_id",
							"houseName",
							"houseLongLoc",
							"houseLatLoc",
							"housePicture",
						])
					);
				});
		});
		it("405 for invalid methods on /api/houses", () => {
			const invalidMethods = ["patch", "put", "delete", "post"];
			const methodPromises = invalidMethods.map((method) => {
				return request(app)
					[method]("/api/houses")
					.expect(405)
					.then(({ body: { msg } }) => {
						expect(msg).to.equal("method not allowed");
					});
			});
			return Promise.all(methodPromises);
		});
		describe("/?query", () => {
			it("GET - 200 for successful request for list of all houses belonging to specific calendar", () => {
				return request(app)
					.get("/api/houses/?calendar_id=1")
					.expect(200)
					.then((res) => {
						res.body.houses.forEach((house) =>
							expect(house.calendar_id).to.equal(1)
						);
					});
			});
			it("404 for requesting a list of houses with a calendar_id that dose not exist", () => {
				return request(app)
					.get("/api/houses/?calendar_id=999999999")
					.expect(404)
					.then((res) => {
						expect(res.body.msg).to.equal("Calendar_id does not exist");
					});
			});
			it("400 for requesting a list of houses with an invalid calendar_id", () => {
				return request(app)
					.get("/api/houses/?calendar_id=NOT-AN-ID")
					.expect(400)
					.then((res) => {
						expect(res.body.msg).to.equal("Invalid calendar_id");
					});
			});
		});
	});

	describe("middleWare", () => {
		describe("doesItemExist", () => {
			it("returns a boolean when passed three strings", () => {
				return doesItemExist("a_sheard", "username", "users").then((actual) => {
					expect(typeof actual).to.equal("boolean");
				});
			});
			it("returns true when the item exists", () => {
				return doesItemExist("a_sheard", "username", "users").then((actual) => {
					expect(actual).to.equal(true);
				});
			});
			it("returns false when the item does not exists", () => {
				return doesItemExist("NOT-AN-ITEM", "username", "users").then(
					(actual) => {
						expect(actual).to.equal(false);
					}
				);
			});
		});
	});
});
