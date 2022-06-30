const express = require("express");

const routes = express.Router();

// GET PageViews Routes
routes.get("/", (req, res) => res.render("index"));
routes.get("/register", (req, res) => res.render("register"));
routes.get("/search", (req, res) => res.render("search-results"));

module.exports = routes;
