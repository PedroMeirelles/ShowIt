const express = require("express");

const routes = express.Router();

const LoginController = require("./controllers/LoginController");

const EventController = require("./controllers/EventController");

const SignInController = require("./controllers/SignInController");

const TicketController = require("./controllers/TicketController");

routes.post("/login", LoginController.index);

routes.get("/events", EventController.index);

routes.get("/ticket", TicketController.index);

routes.post("/ticket", TicketController.create);

routes.post("/signin", SignInController.index);

module.exports = routes;
