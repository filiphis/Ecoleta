const express = require("express");

const routes = express.Router();
const placesController = require("./controllers/placesController");

// GET PageViews Routes
routes.get("/", (req, res) => res.render("index"));
routes.get("/register", (req, res) => res.render("register"));
routes.get("/search", placesController.list);

module.exports = routes;
