const { json } = require('express');
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../data/users.json');
const productArray = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log(productArray);

const users = {
    browse: (req, res) =>{
        res.send('estamos en /users');
    },
    read: (req, res) => {
        const userId = req.params.id
        res.send('estamos en /users/' + userId);
    },
    create: (req, res) => {
       //res.send('Estoy en FORMULARIO para crear producto');
       res.render('register')
    },
    edit: (req, res) => {
        const userId = req.params.id
        res.send('formulario que edita un usuario' + userId);
    },
    add: (req, res) => {
     
        // Se guarda
        productArray.push(
            {
                 userID: req.body.userID,
                 userName: req.body.userName,
                 userLastN: req.body.userLastN,
                 userPass: req.body.userPass,
                 userCategory: req.body.userCategory,
                 userImage: req.file ? req.file.filename : 'no envio imagen',
            }
        )
        fs.writeFileSync(filePath, JSON.stringify(productArray, null, ''))
        console.log('FILE SAVED');
        
        //  Y luego rediecionar
        res.redirect('/user?saved=true');

    },
    update: (req, res) => {
        const userId = req.params.id
        res.send('vamos actualizar los datos de un usuario' + userId);
    },
    delete: (req, res) => {
        const userId = req.params.id
        res.send('vamos eliminar / borrar del producto' + userId);
    }
}

module.exports= users;