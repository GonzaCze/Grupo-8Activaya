const express = require('express');
const router = express.Router();
const uploads = require('../middlewares/productMulter')
const controller = require('../controllers/productsController');

// Todo los productos
router.get("/", controller.products)

// Aplicar filtros
router.post("/filtro", controller.filter)

//Aplicar buscador
router.get("/buscar", controller.search)

//Crear Producto
router.get('/create', controller.create);
router.post('/create', uploads.single('pdtImage') ,controller.add);//se puede colocar uploads.any()para que reciba muchas archivos.

// Detalle Producto
router.get("/detalle/:id", controller.detail)

//Modificar Producto
router.get("/editar/:id", controller.edicionFormulario)
router.put("/editar/:id", controller.editado)

//Eliminar producto en proceso
router.delete ("/eliminar/:id", controller.delete)

router.get('/shoppingCart', controller.shoppingCart);

module.exports = router;