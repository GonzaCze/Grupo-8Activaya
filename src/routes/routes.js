const express = require ("express");
const routes = express.Router();
const controller = require ("../controller/controller")



routes.get('/', controller.index)
routes.get('/login', controller.login )
routes.get('/registro',controller.registro)
routes.get('/detalle', controller.detalle )
routes.get('/carrito', controller.carrito)

module.exports = routes;