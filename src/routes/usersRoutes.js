const express = require('express');
const controller = require('../controllers/usersController');
const upload = require('../middlewares/userMulter');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validations = require('../middlewares/validationRegistMiddle')

const router = express.Router();

// RUTAS - localhost:3000/users/...
//Ingresar
router.get('/login', guestMiddleware ,controller.login);
//Proceso de Ingreso
router.post('/login', controller.processLogin);

//Mi Perfil
router.get('/userLogged', authMiddleware ,controller.userLogged);
//Logout
router.get('/logout', authMiddleware ,controller.logout);


//ver todos los usuarios
router.get('/users', controller.listAll);

//Formulario de registro
router.get('/register', guestMiddleware ,controller.register);
// Procesar el registro
router.post('/register', upload.single('userImage'), validations ,controller.processRegister);//se puede colocar uploads.any()para que reciba muchas archivos.

//Perfil - detalle del usuario
router.get('/profile/:id', upload.single('userImage'),controller.profile) 

//Editar un Perfil
router.get('/userEdit/:id', controller.edit)
// Proceso de Edicion
router.put('/userEdit/:id', upload.single('userImage') ,controller.processEdit)

// Borrar
router.delete('/:id', controller.delete)

module.exports = router;