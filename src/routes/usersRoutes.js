const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const upload = require('../middlewares/userMulter')



// RUTAS - localhost:3000/users/...
//Ingresar
router.get('/login', controller.login);
//Proceso de Ingreso
router.post('/login', [
    check('email').isEmail().withMessage('Email Invalido'),
    check('password').isLength({min:8}).withMessage('La Contrasena es invalida')
],controller.processLogin);
//ver todos los usuarios
router.get('/users', controller.listAll);

//Formulario de registro
router.get('/register', controller.register);
// Procesar el registro
router.post('/register', upload.single('userImage') ,controller.processRegister);//se puede colocar uploads.any()para que reciba muchas archivos.

//Perfil - detalle del usuario
router.get('/profile/:id', upload.single('userImage'),controller.profile) 

//Editar un Perfil
router.get('/userEdit/:id', controller.edit)
// Proceso de Edicion
router.put('/userEdit/:id', upload.single('userImage') ,controller.processEdit)

// Borrar
router.delete('/:id', controller.delete)

module.exports = router;