const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
  pName: {
    type: String,
    required: true,
  },
  pDescription: {
    type: String,
    required: true,
  },
  pPrice: {
    type: String,
    required: true,
  },
  pQuantity: {
    type: String,
    required: true,
  },
  pCategory: {
    type: ObjectId,
    ref: 'categories',
  },
  pImages: {
    type: Array,
    required: true,
  },
  pReviews: [
    {
      review: String,
      user: { type: ObjectId, ref: 'users' },
      rating: String,
      createdAt: Date,
      default: Date.now(),
    },
  ],
});

const productModel = mongoose.model('products', productSchema);
module.exports = productModel;
