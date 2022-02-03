DROP DATABASE IF EXISTS resume

create database resume;

use resume;

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects`(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    skills VARCHAR(250) NOT NULL,
    
    
);

DROP TABLE IF EXITS `images`;

CREATE TABLE `images` (

id INT AUTO_INCREMENT PRIMARY KEY,
url VARCHAR(250) NOT NULL,
title VARCHAR(250) NOT NULL,
project_id INT NOT NULL,
CONSTRAINT fk_project_image
FOREIGN KEY (project_id),
REFERENCES projects(id)
);


DROP TABLE IF EXITS `contact`;

CREATE TABLE `contact`(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    message VARCHAR(250) NOT NULL,
)

