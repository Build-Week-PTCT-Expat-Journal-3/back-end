const server = require("../server")
const db = require("../data/dbConfig")
const supertest = require("supertest")

afterAll(async () => {
	// close the database connection so the test process doesn't hang or give a warning
	await db.destroy()
})


describe("story tests", () => {

    it("gets all stories", async () => {
        const res = await supertest(server).get("/api/story")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })

    it("GET /api/story/:id", async () => {
        const res = await supertest(server).get("/api/story/:id")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })

    // it("DELETE /:id", async () => {
    //     const res = await supertest(server)
    //     .delete("/5")
    //     expect(res.statusCode).toBe(204)
    // })
})