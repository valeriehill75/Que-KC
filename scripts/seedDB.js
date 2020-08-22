const mongoose = require("mongoose");
const db = require("../models");

//Seed data for users

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/review_db"
);

const userSeed = [
    {
        email: "michaelC@email.com",
        password: "michaelCervantes",
        firstName: "Michael",
        lastName: "Cervantes",
        reviews: []
    },
    {
        email: "valerieH@email.com",
        password: "valerieHill",
        firstName: "Valerie",
        lastName: "Hill",
        reviews: " "
    },
    {
        email: "jeremyS@email.com",
        password: "jeremyStone",
        firstName: "Jeremy",
        lastName: "Stone",
        reviews: " "
    },
    {
        email: "chrisK@email.com",
        password: "chrisKramer",
        firstName: "Chris",
        lastName: "Kramer",
        reviews: " "
    },
    {
        email: "talmageJ@email.com",
        password: "talmageJosephs",
        firstName: "Talmage",
        lastName: "Josephs",
        reviews: " "
    },
    {
        email: "isaacM@email.com",
        password: "isaacMatthews",
        firstName: "Isaac",
        lastName: "Matthews",
        reviews: " "
    },
    {
        email: "lindaF@email.com",
        password: "lindaFry",
        firstName: "Linda",
        lastName: "Fry",
        reviews: " "
    },
    {
        email: "gregA@email.com",
        password: "gregAlonzo",
        firstName: "Greg",
        lastName: "Alonzo",
        reviews: " "
    },
    {
        email: "jasonM@email.com",
        password: "jasonMatthews",
        firstName: "Jason",
        lastName: "Matthews",
        reviews: " "
    },
    {
        email: "lindseyN@email.com",
        password: "lindseyNichols",
        firstName: "Lindsey",
        lastName: "Nichols",
        reviews: " "
    },
    {
        email: "aidanS@email.com",
        password: "aidanSaffina",
        firstName: "Aidan",
        lastName: "Saffina",
        reviews: " "
    },
    {
        email: "jordanR@email.com",
        password: "jordanRose",
        firstName: "Jordan",
        lastName: "Rose",
        reviews: " "
    },
    {
        email: "dylanF@email.com",
        password: "dylanFry",
        firstName: "Dylan",
        lastName: "Fry",
        reviews: " "
    },
    {
        email: "dawsonF@email.com",
        password: "dawsonFry",
        firstName: "Dawson",
        lastName: "Fry",
        reviews: " "
    },
    {
        email: "jacksonF@email.com",
        password: "jacksonFry",
        firstName: "Jackson",
        lastName: "Fry",
        reviews: " "
    },
    {
        email: "nickF@email.com",
        password: "nickFry",
        firstName: "Nick",
        lastName: "Fry",
        reviews: " "
    },
    {
        email: "seanM@email.com",
        password: "seanMichaels",
        firstName: "Sean",
        lastName: "Michaels",
        reviews: " "
    },
    {
        email: "blakeH@email.com",
        password: "blakeHess",
        firstName: "Blake",
        lastName: "Hess",
        reviews: []
    },
    {
        email: "carrieE@email.com",
        password: "carrieErickson",
        firstName: "Carrie",
        lastName: "Erickson",
        reviews: " "
    },
    {
        email: "janetH@email.com",
        password: "janetHearn",
        firstName: "Janet",
        lastName: "Hearn",
        reviews: " "
    }
];

const reviewSeed = [
    {
        foodRating: 5,
        staffSass: 5,
        bathrooms: 5,
        faveItem: "Baked Beans",
        threeWords: "Delicious, Fast, Clean",
        firstName: "Valerie",
        lastName: "Hill"
    },
    {
        foodRating: 7,
        staffSass: 9,
        bathrooms: 4,
        faveItem: "Ribs",
        threeWords: "Perfection, Affordable, Best-Ever",
        firstName: "Chris",
        lastName: "Kramer"
    },
    {
        foodRating: 6,
        staffSass: 2,
        bathrooms: 7,
        faveItem: "Brisket",
        threeWords: "Quick, Tasty, Friendly",
        firstName: "Jeremy",
        lastName: "Stone"
    },
    {
        foodRating: 9,
        staffSass: 0,
        bathrooms: 7,
        faveItem: "Pulled Pork",
        threeWords: "Fast, Busy, Great",
        firstName: "Michael",
        lastName: "Cervantes"
    }
];

db.UserData
    .remove({})
    .then(() => db.UserData.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.UserReview
    .remove({})
    .then(() => db.UserReview.collection.insertMany(reviewSeed))
    .then(data => {
        console.log(data.result.n + " reviews insrted!");
    });