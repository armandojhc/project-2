CREATE database triolingo_db;

USE triolingo_db;

CREATE TABLE phrases (
id int NOT NULL AUTO_INCREMENT,
catagory VARCHAR(30) NOT NULL,
english VARCHAR (250) NOT NULL,
spanish VARCHAR (250) NOT NULL,
PRIMARY KEY (id)
);