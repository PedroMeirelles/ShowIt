const express = require("express");
const routes = express.Router();
const LoginController = require("./controllers/LoginController");
const EventController = require("./controllers/EventController");
const SignUpController = require("./controllers/SignUpController");
const VerifySignController = require("./controllers/VerifySignController");
const TicketController = require("./controllers/TicketController");
const EventCategoryController = require("./controllers/EventCategoryController");
const EventTicketsController = require("./controllers/EventTicketsController");
const EventSearchBox = require("./controllers/EventSearchBox");

routes.use("/login", LoginController.index);

routes.get("/events", EventController.index);

routes.post("/events", EventController.events);

routes.post("/eventscat", EventCategoryController.index);

routes.post("/eventticket", EventTicketsController.index);

routes.post("/eventsearch", EventSearchBox.index);

routes.get("/ticket", TicketController.index);

routes.post("/ticket", TicketController.create);

routes.post("/signup", SignUpController.index);

routes.post("/verifysignup", VerifySignController.index);

module.exports = routes;
