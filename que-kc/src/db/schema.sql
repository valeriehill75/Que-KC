CREATE DATABASE que_kc_db;
USE que_kc_db;

CREATE TABLE places
(
    id int NOT NULL AUTO_INCREMENT,
    food_rating INT NOT NULL,
    staff_sass INT NOT NULL,
    bathroom INT NOT NULL,
    drive_thru_sass INT NOT NULL,
    favorite_item VARCHAR(75),
    three_words VARCHAR(50),
    uber BOOLEAN DEFAULT false,
)
