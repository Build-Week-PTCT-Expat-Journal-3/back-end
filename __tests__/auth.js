const supertest = require("supertest")
const server = require("../server")
const db = require("../data/dbConfig")

beforeEach(async () => {
    await db.seed.run()
})

 afterAll(async () => {
     await db.destroy()
 });

 describe("/Register", () => {
    it("Register Successful",  () => {
        return supertest(server).post("/api/auth/register").send({ username: "Goku3", password: "abc", firstname: "John", location: "Tampa, FL"})
        .then(res => {expect(res.status).toBe(201)})
    })
    it("Register Fail- No Username", () => {
        return supertest(server).post("/api/auth/register").send({password: "abc", firstname: "John", location: "Tampa, FL"})
        .then(res=> {
            expect(res.status).toBe(400)
            expect(res.body.errorMessage).toBe("Username is Missing");
        });
    })
    it("Register Fail- Duplicate Username", () => {
        return supertest(server).post("/api/auth/register").send({ username: "Goku1", password: "abc", firstname: "John", location: "Tampa, FL"})
        .then(res=> {
            expect(res.status).toBe(409)
            expect(res.body.message).toBe("Username is already taken"); 
        });
    })
    it("Register Fail- No Password", () => {
        return supertest(server).post("/api/auth/register").send({username: "Goku3", firstname: "John", location: "Tampa, FL"})
        .then(res=> {
            expect(res.status).toBe(400)
            expect(res.body.errorMessage).toBe("Password is Missing");
        });
    })
    it("Register Fail- No location", () => {
        return supertest(server).post("/api/auth/register").send({ username: "Goku3", password: "abc", firstname: "John"})
        .then(res=> {
            expect(res.status).toBe(400)
            expect(res.body.errorMessage).toBe("Location is Missing");
        });
    })
    it("Register Fail- No firstname", () => {
        return supertest(server).post("/api/auth/register").send({ username: "Goku3", password: "abc", location: "Tampa, FL"})
        .then(res=> {
            expect(res.status).toBe(400)
            expect(res.body.errorMessage).toBe("First Name is Missing");
        });
    })
})

describe("login test", () => {
    it("Login Successful", () => {
        return supertest(server).post("/api/auth/login").send({username: "Goku1", password: "abc"})
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("Welcome Goku1!");
            expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
        })
    })
    it("Login Fail- Wrong Password", () => {
        return supertest(server).post("/api/auth/login").send({username: "Goku1", password: "abcd"})
        .then(res => {expect(res.status).toBe(401);
            expect(res.body.errorMessage).toBe("Invalid credentials");
       })
    })
    it("Login Fail- No username", () => {
        return supertest(server).post("/api/auth/login").send({password: "abcd"})
        .then(res => {
            expect(res.status).toBe(400);
            expect(res.body.errorMessage).toBe("Username is Missing");
       })
    })
    it("Login Fail- No password", () => {
        return supertest(server).post("/api/auth/login").send({username: "Goku1"})
        .then(res => {
            expect(res.status).toBe(400);
            expect(res.body.errorMessage).toBe("Password is Missing");
       })
    })
})