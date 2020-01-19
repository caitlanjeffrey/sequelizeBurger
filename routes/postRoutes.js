// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/burger", function (req, res) {
        var query = {};
        if (req.query.burger_id) {
            query.BurgerId = req.query.burger_id;
        }
        db.Burger.findAll({
            where: query
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/burger/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            console.log(dbPost);
            res.json(dbPost);
        });
    });

    // POST route for saving a new post
    app.post("/api/burger", function (req, res) {
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/burger/:id", function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // PUT route for updating posts
    app.put("/api/burger", function (req, res) {
        db.Post.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });
};