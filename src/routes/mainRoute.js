const { Router } = require("express");
const mainController = require('../controllers/mainController')
const mainRoute = Router();

mainRoute.get('/', mainController.home);
mainRoute.get('/login', mainController.login);
mainRoute.get('/register', mainController.register);
mainRoute.get('/detail', mainController.detail);
mainRoute.get('/brands', mainController.brands);
mainRoute.get('/shoppingCart', mainController.shoppingCart);

module.exports = mainRoute;
// const express = require ("express");
// const routes = express.Router();
// const controller = require ("../controllers/mainController")

// routes.get('/', controller.index)
// routes.get('/login', controller.login )
// routes.get('/registro',controller.registro)
// routes.get('/detalle', controller.detalle )
// routes.get('/carrito', controller.carrito)

// module.exports = routes;