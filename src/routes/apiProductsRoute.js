const express = require('express');
const router = express.Router();
const controller = require ("../controllers/apiProductsController")

router.get("/", controller.products)

router.get("/:id", controller.detail)

module.exports = router;