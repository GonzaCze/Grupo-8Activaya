const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');
const myStorage = multer.diskStorage({
    destination: function (req, file, cb){
        console.log('FILE-INFO: ', file)
        cb(null, './public/uploads/users') // customizamos nuesta storage... 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.fieldname + path.extname(file.originalname))
    }
});                                     ///el archivo ingresara con el 'name' del formulario

const uploads = multer({storage: myStorage});

const users = require('../controllers/usersController');

// GET - localhost:3000/users
router.get('/', users.browse);

// GET - localhost:3000/users/create => redirecciona una view en el controller
router.get('/register', users.create);
// POST - localhost:3000/users
router.post('/', uploads.single('userImage') ,users.add);//se puede colocar uploads.any()para que reciba muchas archivos.

// GET - localhost:3000/users/edit/:id
router.get('/edit/:id', users.edit);
// PUT - localhost:3000/users/id
router.put('/:id', users.update);

// GET - localhost:3000/users/:id
router.get('/:id', users.read);

// DELETE - localhost:3000/users/:id
router.delete('/:id', users.delete);

module.exports = router;