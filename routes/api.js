const express = require("express");
const router = express.Router();
const productsController = require("../controller/products")
const productCategoryController = require("../controller/product_category")
const transactionsController = require("../controller/transactions")

router.get("/products", productsController.getAllProducts);
router.get("/product-categories", productCategoryController.getAllProductCategory);
router.get("/transactions", transactionsController.getAllTransactions)

module.exports = router;