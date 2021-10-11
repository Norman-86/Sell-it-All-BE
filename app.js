// require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const productsRoutes = require("./routes/productsRoute");
const reviewsRoutes = require("./routes/reviewsRoute");
const categoriesRoutes = require("./routes/categoriesRoute");

//Database
const dbSetup = require("./database/dbConnect");
dbSetup();

//Routes
app.use(productsRoutes);
app.use(reviewsRoutes);
app.use(categoriesRoutes);

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
