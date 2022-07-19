const express = require('express');
const router = express.Router();
const uploads = require('../middlewares/productMulter')
const controller = require('../controllers/productsController');

//GET - localhost:3000/products
router.get('/products', controller.listAll);

// GET - localhost:3000/products/create => redirecciona una view en el controller
router.get('/create', controller.create);
// POST - localhost:3000/products
router.post('/products', uploads.single('pdtImage') ,controller.add);//se puede colocar uploads.any()para que reciba muchas archivos.

router.get('/edit/:id', controller.edit);
router.get('/create', controller.create);
router.get('/products', controller.products);
router.get('/shoppingCart', controller.shoppingCart);
router.get("/detalle/:id", controller.detail);
router.get("/editar/:id", controller.buttonEdit)
router.delete ("/:id", controller.delete)
router.put ("/editado/:id", controller.editB)


module.exports = router;