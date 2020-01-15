console.log("controller uploaded")
var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
    console.log("GET")
    burger.all(function(result) {
        res.render("index", {
            burgers: result,
        });
    })
});

router.post("/api/burger", function (req, res) {
    console.log(req.body.burger_name);
    burger.add([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json(result);
    })
})

router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true,
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("api/burger/delete/:id", function (req, res) {
    console.log("Req params ID: " + req.params.id)
    burger.delete(req.params.id, function (result) {
        res.redirect("/");
    });
});

module.exports = router;