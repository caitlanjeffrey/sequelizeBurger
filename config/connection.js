// Set up MySQL connection.
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = msql.createConnection(process.env / JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "sequelize_burger"
    });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection; 