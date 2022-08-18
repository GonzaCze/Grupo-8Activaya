const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator'); 
// const User = require('../models/User');
const modelUser = require("../../database/models/User");

const controller = {
    login: (req, res)=>{
        //aca se lee una cookie
        // console.log(req.cookies.testing) // de esta forma se puede ver por consola el contenido de la cookie
        res.render('login',)
    },
    processLogin: (req,res) => {
        modelUser.findAll()
      .then((users) => {
    
    let errors = validationResult(req);
    let usuarioLogueado = [];

    if(req.body.userEmail != '' && req.body.userPass != ''){
        usuarioLogueado = users.filter(function (user) {
          return user.userEmail === req.body.userEmail  
        });

        if (usuarioLogueado.length === 0) {
            return res.render(path.resolve(__dirname, '../views/login'),{errors: {userEmail: {msg: 'E-mail invalido' }}})}
        

        //Aquí verifico si la clave que está colocando es la misma que está hasheada en la Base de datos - El compareSync retorna un true ó un false
        if(bcrypt.compareSync(req.body.userPass,usuarioLogueado[0].userPass) === false){
          usuarioLogueado = [];
        }
      }

       //console.log(usuarioLogueado);
        //return res.send(usuarioLogueado);
        //Aquí determino si el usuario fue encontrado ó no en la Base de Datos
        if (usuarioLogueado.length === 0) {
            return res.render(path.resolve(__dirname, '../views/login'),{errors: {userEmail: {msg: 'las credenciales son invalidas' }}});
          } else {
            //Aquí guardo en SESSION al usuario logueado
            req.session.userLogged = usuarioLogueado[0];
          }
          //Aquí verifico si el usuario le dio click en el check box para recordar al usuario 
          if(req.body.remember_user){
            res.cookie('cookieEmailUser', req.body.userEmail, { maxAge: (1000*60)*2})
          }
          return res.redirect("/users/userLogged",);   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home)
    })},
    logout: (req, res)=>{
        res.clearCookie('cookieEmailUser')
        req.session.destroy();
        return res.redirect('/');
    },
    listAll: (req, res) =>{
        modelUser.findAll()
        .then((users) => {
        res.render('users', {users} );     
    })},
    register: (req, res) => {
       //aca se setea una cookie
       res.cookie('nombre', 'valor', {maxAge:1000*30 })
       res.render('register');

    },
    processRegister: (req, res) => {
        // validaciones previas al registro
        const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0){
                return res.render('register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                });
            }
            modelUser.findAll()
            .then((User) => {
                
        let userInDb =  User.find((User) => User.userEmail == req.body.userEmail);
        if (userInDb){
            return res.render('register', {
                errors: {
                    userEmail: {
                        msg: 'Este EMAIL ya esta registrado'
                    }
                },
                oldData: req.body
            })
        }
    })
        let userToCreate = {
            userName: req.body.userName,
            userLastN: req.body.userLastN,
            userEmail: req.body.userEmail,
            userCategory: req.body.userCategory,
            userPass:  bcrypt.hashSync(req.body.userPass, 10),
            userImage: req.file ? req.file.filename : ''
        }  

        modelUser.create(userToCreate)
        .then(() => {
            return res.redirect('../users/login') 
        })
        .catch(error => console.log(error));

        // registro proceso
        // console.log(req.body)
        // const newID = users[(users.length - 1)].userID + 1;
        // let file = req.file;
        // let newUser = {
        //     userID: newID,
        //     userName: req.body.userName,
        //     userLastN: req.body.userLastN,
        //     userPass: req.body.userPass,
        //     userCategory: req.body.userCategory,
        //     userImage: `${file.filename}`,
        // }
        // users.push(newUser);
        // fs.writeFileSync(
        //     path.join(__dirname, '../data/users.json'),
        //     JSON.stringify(users, null, 4),
        //         {
        //             encoding: 'utf-8',
        //         }
        //     );
        //     console.log('FILE SAVED');
        //     res.render('users', {users});         
    },
    profile: (req, res) =>{
        let id= req.params.id;
        modelUser.findByPk(id)
        .then((profile) => {
        res.render('profile', {profile})
    })},
    userLogged: (req, res)=>{
        modelUser.findAll({
            where: {
              userEmail: req.session.userLogged.userEmail
            }
          })
        .then((resultado)=> {
            const user = resultado[0]
            res.render("userLogged", {user})
        })
    },
    // userLogged: (req, res)=>{
    //     const user = req.session.userLogged
    //     res.render("userLogged",{user})
    // },
    delete: (req, res)=>{
        let id = req.params.id;
        modelUser.destroy({
            where: {userID: req.params.id}
        })
        .then(() => {
            modelUser.findAll()
            .then((users)=> {
                res.render("users", {users})
            })
        })},
    //     console.log(id)
    //     users = users.filter((item)=> item.userID != id);
    //     fs.writeFileSync(
    //         path.join(__dirname, '../data/users.json'),
    //         JSON.stringify(users, null, 4),
    //             {
    //                 encoding: 'utf-8',
    //             }
    //         );
    //         res.render('users', {users})
    // },
    edit: (req, res)=>{
        let id= req.params.id;
        modelUser.findByPk(id)
        .then((userInfo)=> {
            res.render('userEdit', {userInfo})})
    },
    processEdit: (req, res)=>{
        let id = req.params.id;
        let file = req.file;
        const {userName, userLastN, userEmail, userPass, userCategory, userImage} = req.body;
        modelUser.update({
                    userName : userName,
                    userLastN : userLastN,
                    userEmail : userEmail,
                    userPass : userPass,
                    userCategory : userCategory,
                    userImage : `${file.filename}`
        },
        {
            where: {UserID: id}
        })
        .then(() => {
            modelUser.findAll()
            .then((users)=> {
                res.render("users", {users})
            })
        })}
}

module.exports= controller;