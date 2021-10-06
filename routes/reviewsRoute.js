const express = require('express');
const router = express.Router();
const RevCtrl = require("../controllers/reviewsController");

// create a new review
router.post("/products/:id/reviews", RevCtrl.createReviews);

module.exports = router;