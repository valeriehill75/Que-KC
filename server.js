const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const userRoute = require("./routes/api/users");
const reviewRoute = require("./routes/api/review");

//Defining the port
const PORT = process.env.PORT || 3001;

//Creating the express app
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Mongoose connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/review_db", {
    // .connect(process.env.MONGODB_URI || "mongodb://localhost/userreview_db", {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Routes - These need to be looked at
// app.use(routes);
app.use("/users", userRoute);
app.use("/reviews", reviewRoute);

//Connecting on PORT 3001
app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}!`);
});
