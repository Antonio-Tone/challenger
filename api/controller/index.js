const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
// Import all model's objects
const { users } = require("../model");
const { books } = require("../model");
const { bookAuthors } = require("../model");
const { orders } = require("../model");

// ============ User's router ==============

routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});


module.exports = {
  express,
  routes,
};
