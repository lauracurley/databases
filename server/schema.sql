DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users
(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  room_id int,
  user_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);



CREATE TABLE friends (
  id int NOT NULL AUTO_INCREMENT,
  user_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

