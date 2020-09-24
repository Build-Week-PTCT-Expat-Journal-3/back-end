const server = require("../server")
const db = require("../data/dbConfig")
const supertest = require("supertest")

beforeEach(async () => {
    // run the seeds programatically before each test to start fresh
    await db.seed.run()
})

afterAll(async () => {
	// close the database connection so the test process doesn't hang or give a warning
	await db.destroy()
})


//GET all stories unauth
describe("story tests", () => {

    it("GET unauth test", async () => {
        const res = await supertest(server).get("/api/story")
        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
    })

});

//GET all stories by id
describe("Logs in and view stories", () => {
    it("should return a token", async () => {
       res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "sloppyJ", password: "abc1" })
      expect(res.body.token).toBeTruthy()
    });
    it("returns a story by the id", async () => {
      res = await supertest(server)
        .get("/api/story/2")
        .auth("sloppyJ", "abc1")
        .set("Authorization", res.body.token)
      expect(res.type).toBe("application/json")
    });
  });

//Get test. Users posts
  describe("Logs in and view stories", () => {
    it("should return a token", async () => {
       res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "Goku1", password: "abc" })
      expect(res.body.token).toBeTruthy()
    });
    it("returns a users posts", async () => {
      res = await supertest(server)
        .get("/api/story/1/story")
        .auth("Goku1", "abc1")
        .set("Authorization", res.body.token)
      expect(res.statusCode).toBe(200)
    });
  });

//Post test
  describe("Logs in and creates stories", () => {
    it("should return a token", async () => {
       res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "Goku1", password: "abc" })
      expect(res.body.token).toBeTruthy()
    });
    it("creates a new post", async () => {
      res = await supertest(server)
        .post("/api/story/1/story")
        .send({
            title: "cheesecake!",
            location: "Cheesecake Factory",
            description: "Best place for dessert.",
            date: "July 10, 2020",
            image_url: "https://images.unsplash.com/photo-1550597621-b0ca7da62231?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        })
        .auth("Goku1", "abc1")
        .set("Authorization", res.body.token)
      expect(res.statusCode).toBe(201)
    });
  });

//PUT test
  describe("Logs in and updates stories", () => {
    it("should return a token", async () => {
       res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "cityboy", password: "abc3" })
      expect(res.body.token).toBeTruthy()
    });
    it("updates a post", async () => {
      res = await supertest(server)
        .put("/api/story/1")
        .send({
            title: "Coolest theater in town",
            location: "downtown",
            description: "Great way to end the night :)",
            date: "July 15, 2020",
            image_url: "https://images.unsplash.com/photo-1512113569142-8a60fccc7caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        })
        .auth("cityboy", "abc3")
        .set("Authorization", res.body.token)
      expect(res.statusCode).toBe(201)
    });
  });


//DELETE test
describe("Logs in and deletes stories", () => {
    it("should return a token", async () => {
       res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "cityboy", password: "abc3" })
      expect(res.body.token).toBeTruthy()
    });
    it("deletes a post", async () => {
      res = await supertest(server)
        .delete("/api/story/1")
        .auth("cityboy", "abc3")
        .set("Authorization", res.body.token)
      expect(res.statusCode).toBe(204)
    })
  });