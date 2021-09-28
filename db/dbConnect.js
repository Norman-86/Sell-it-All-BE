const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('Database successfully connected'))

    .catch((err) => console.log('Database connection failed'));
};

module.exports = connectDB;
