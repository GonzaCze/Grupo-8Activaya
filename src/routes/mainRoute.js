const { Router } = require("express");
const mainController = require('../controllers/mainController')
const mainRoute = Router();


mainRoute.get('/', mainController.index);


module.exports = mainRoute;
