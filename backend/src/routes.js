const express = require("express");

const routes = express.Router();

const LoginController = require("./controllers/LoginController");

const EventController = require("./controllers/EventController");

const SignUpController = require("./controllers/SignUpController");

const VerifySignController = require("./controllers/VerifySignController");

const TicketController = require("./controllers/TicketController");

routes.post("/login", LoginController.index);

routes.get("/events", EventController.index);

routes.get("/ticket", TicketController.index);

routes.post("/ticket", TicketController.create);

routes.post("/signin", SignUpController.index);

routes.post("/verifysignin", VerifySignController.index);

module.exports = routes;
