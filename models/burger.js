var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            console.log(res)
            cb(res);
        })
    },
    devoured: function (cb) {
        orm.devouredBurgers("burgers", function (res) {
            console.log(res)
            cb(res);
        })
    },
    add: function (cols, name, cb) {
        orm.create("burgers", cols, name, function (res) {
            cb(res)
        })
    },
    update: function (devour, condition, cb) {
        orm.update("burgers", devour, condition, function (res) {
            cb(res);
        })
    },
    delete: function (id, cb) {
        console.log("burger Model ID: " + id)
        orm.deleteOne(id, function (res) {
            cb(res);
        })
    }
}

module.exports = burger;
