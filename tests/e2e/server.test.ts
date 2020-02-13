import request from "supertest";
import server from "../../src/server";

describe("Test server routes", () => {
    it("GET / respond Hello World!", done => {
        request(server)
            .get("/")
            .expect("Content-Type", /text\/html/)
            .expect("Hello World!")
            .expect(200, done);
    });
});
