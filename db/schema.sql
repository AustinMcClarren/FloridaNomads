    DROP DATABASE IF EXISTS nomad_db;
    CREATE DATABASE nomad_db;


    -- CREATE TABLE through(
    --     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    -- -- what else goes here>>>>>
    -- );


-- CREATE TABLE through(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,



    -- CREATE TABLE image(
    --     ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    --     filename VARCHAR(255) NOT NULL,
    --     filesize INT UNSIGNED NOT NULL,
    --     mimetype VARCHAR(255) NOT NULL,
    --     data LONGBLOB NOT NULL
    -- );



    -- CREATE TABLE traveller(
    --     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    --     name VARCHAR(30) NOT NULL,
    --     gender ENUM ('M', 'F'),
    --     age INT UNSIGNED NOT NULL,
    --     email VARCHAR(50) NOT NULL,
    --     points INT UNSIGNED NOT NULL DEFAULT 0
    -- );

    -- CREATE TABLE destinations(
    --     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    --     name VARCHAR(255) NOT NULL,
    --     country VARCHAR(255) NOT NULL,
    --     city VARCHAR(255) NOT NULL,
    --     description TEXT NOT NULL,
    --     rating FLOAT NULL DEFAULT 0,
    --     image_url VARCHAR(255) NOT NULL,
    --     traveller_id INT
    --     -- FOREIGN KEY (traveller_id) REFERENCES traveller(id)
    --     -- for key ref traveller
    -- );



    -- ADDED FIRST AND LAST NAME TO TRAVELLER
    -- ADDED GENDER M OR F 
    -- ADDED THER IMAGE MODEL





-- UNSIGNED MEANS CANT BE NEGATIVE
-- POINTS WILL BE SET TO 0 AS A DEFAULT SINCE THEY ARE NEW
-- IMAGE URL MEANS DATA CAN BE STORED ABOUT AN IMAGE IN SQL?
-- MIMETYPE IS A STRING COLUMN THAT STORES MIME TYPE OF THE IMAGE
-- DATA IS A BINARY LARGE OBJECT (BLOB) COLUMN THAT STORES ACTUAL IMAGE DATA
-- =======

