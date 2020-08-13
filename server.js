const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const routes = require("./routes/api/users");

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
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Routes - These need to be looked at
// app.use(routes);
app.use("/users", routes);

//Connecting on PORT 3000
app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}!`);
});
