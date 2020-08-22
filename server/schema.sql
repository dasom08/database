DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
username varchar(255), 
text varchar(255),
roomname varchar(255),
date DATETIME
); 

/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


--  mysql -u root -p < server/schema.sql