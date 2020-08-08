const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");

//Defining the port
const PORT = process.env.PORT || 3000;

//Creating the express app
const app = express();

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/review_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//Routes - These need to be looked at
app.use("/api", apiRoutes);


//Connecting on PORT 3000
app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}!`);
});
