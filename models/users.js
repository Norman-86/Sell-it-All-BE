const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  userImage: {
    type: String,
    default: 'user.png',
  },
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
