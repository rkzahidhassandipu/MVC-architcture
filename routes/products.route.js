const express = require("express");
const cors = require("cors");
const { getProducts, saveProducts } = require("../controllers/products.controllers");
const router = express.Router();

// CORS
router.use(cors());

router.get("/products", getProducts);

router.post("/products", saveProducts);

module.exports = router;