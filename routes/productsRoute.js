const express = require('express');
const router = express.Router();
const PdtCtrl = require("../controllers/productsController");

//retrieve all products
router.get("/products", PdtCtrl.fetchProducts);

// create a new product
router.post("/products", PdtCtrl.createProduct);

//retrieve a single product
router.get("/products/:id", PdtCtrl.fetchSingleProduct);

module.exports = router;