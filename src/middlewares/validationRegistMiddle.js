const path = require('path');
const {body} = require('express-validator');

const validations = [
    body('userName').notEmpty().withMessage('Tienes que completar el campo'),
    body('userLastN').notEmpty().withMessage('Tienes que completar el campo'),
    body('userEmail').notEmpty().withMessage('Tienes que completar el campo').bail().isEmail().withMessage('Debe ser un formato de correo electronico valido'),
    body('userPass').notEmpty().withMessage('Tienes que completar el campo'),
    body('userCategory').notEmpty().withMessage('Tienes que completar el campo'),
    body('userImage').custom((value,{req})=>{
        let file = req.file;
        let acceptedExtensions = []; //ante error borrar contenido array
        
        if (!file){
            throw new Error('Debes subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname);
            if (acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivos permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true
    })
];

module.exports = validations;