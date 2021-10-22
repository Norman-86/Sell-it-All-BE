// require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cookieParser = require('cookie-parser');
const { authenticateUser, requireLogin } = require('./middlewares/auth');

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const productsRoutes = require("./routes/productsRoute");
const reviewsRoutes = require("./routes/reviewsRoute");
const categoriesRoutes = require("./routes/categoriesRoute");
const userRoutes = require('./routes/userRoutes');

//Database
const dbSetup = require("./database/dbConnect");
dbSetup();

//Routes
app.use(productsRoutes);
app.use(reviewsRoutes);
app.use(categoriesRoutes);
app.use('/', userRoutes);
app.use(authenticateUser);
app.use(requireLogin);

//error handler utility
app.use((err, req, res, next) => {
  const { status = 500, message = 'Sorry, something went wrong' } = err;
  res.status(status).json(message);
});

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
