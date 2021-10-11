const express = require('express');
const router = express.Router();
const CtgCtrl = require("../controllers/categoriesController");

//retrieve all categories
router.get("/categories", CtgCtrl.fetchCategories);

// create a new category
router.post("/categories", CtgCtrl.createCategory);

module.exports = router;