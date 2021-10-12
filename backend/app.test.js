const request = require("supertest");
const app = require("./app");
const path = require('path');

let elementId;

describe("Get File Test", () => {
    test("GET /api/getFiles", (done) => {
      request(app)
        .get("/api/getFiles")
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
  });

describe("Upload File Test", () => {
    test("POST /api/uploadFile", (done) => {
        request(app)
        .post("/api/uploadFile")
        .attach('file', path.resolve(__dirname,'tests','foo.txt'))
        .expect(201)
        .expect((res) => {
            res.body.fileName = "foo.txt";
            res.body.fileType = "text/plain";
          })
        .end((err, res) => {
            if (err) return done(err);
            elementId = res.body._id;
            return done();
        });
    });
  });

  describe("Delete File Test", () => {
    test("DELETE /api/deleteFile/:id", (done) => {
        request(app)
        .delete(`/api/deleteFile/${elementId}`)
        .expect(200)
        .expect((res) => {
            res.text = "Item Successfully Deleted";
          })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
  });