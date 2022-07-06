const express = require("express");

const routes = express.Router();
const placesController = require("./controllers/placesController");

// GET PageViews Routes
routes.get("/", (req, res) => res.render("index", { saved: false }));
routes.get("/register", (req, res) => res.render("register"));
routes.post("/register", placesController.create);
routes.get("/search", placesController.list);

module.exports = routes;
