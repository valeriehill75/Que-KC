CREATE DATABASE que_kc_db;
USE que_kc_db;

CREATE TABLE places
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    street_address VARCHAR(250),
    city VARCHAR(50),
    state VARCHAR(30),
    zip VARCHAR(10),
    url VARCHAR(100),
    image_url VARCHAR(100),
    food_rating 
    cleanliness
    staff_sass
    bathroom
    drive_thru_sass
    delivery_speed
    favorite_item VARCHAR(75),
    cost 
    three_words VARCHAR(50),
    uber BOOLEAN DEFAULT false,
    review VARCHAR()
)

name of joint
address
complete url
image upload????
food rating (1-5)
cleanliness (1-5)
staff sass (1-5)
bathroom quality (1-5)
drive-thru sass (1-5)
delivery speed (1-5)
favorite menu item
cost $ - $$$ (affordable/moderate/fancy!)
decribe the experience in 3 words
give longer review
uber eats/post mates etc.