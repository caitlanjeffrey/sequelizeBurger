

CREATE DATABASE burger;

USE burger;

CREATE TABLE burgers
(
    id INT
    AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR
    (100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY
    (id)
)