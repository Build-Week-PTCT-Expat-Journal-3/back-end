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

// const user1 = {
//     username: "mock1",
//     password: "password",
//   };
//   const user2 = {
//     username: "mock2",
//     password: "password",
//   };


describe("story tests", () => {

    it("GET unauth test", async () => {
        const res = await supertest(server).get("/api/story")
        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
    })

    it("GET /api/story/:id", async () => {
        const res = await supertest(server)
          .get("/api/story/2")
          .auth("sloppyJ", "abc1")
          .set('Accept', 'application/json')
        expect(res.statusCode).toBe(200)
    })

    // it("DELETE /:id", async () => {
    //     const res = await supertest(server)
    //     .delete("/5")
    //     expect(res.statusCode).toBe(204)
    // })
})


