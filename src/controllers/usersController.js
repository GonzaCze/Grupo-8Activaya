const fs = require('fs');
const path = require('path');
let users = require('../data/users.json');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator'); 
const User = require('../models/User');

const controller = {
    login: (req, res)=>{
        //aca se lee una cookie
        // console.log(req.cookies.testing) // de esta forma se puede ver por consola el contenido de la cookie
        res.render('login',)
    },
    processLogin: (req, res)=>{
        const validationsResult = validationResult(req);
        //Control de errores en el login
        if (validationsResult.errors.length > 0) {
            res.render("./users/login", { errors: validationsResult.mapped(), oldData: req.body });
        } else {
        let userSearch = User.findByField('userEmail', req.body.userEmail);
        let userToLogin = Object.assign({}, userSearch)
        if(userToLogin){
            let userPassOK = bcrypt.compareSync(req.body.userPass, userToLogin.userPass)
            if (userPassOK){
                delete userToLogin.userPass;

                req.session.userLogged =  userToLogin;

                if(req.body.remember_user){
                    res.cookie('cookieEmailUser', req.body.userEmail, { maxAge: (1000*60)*2}) //dura 2 min
                }

                return res.redirect('/users/userLogged')
            }
        return res.render ('login', {
                errors: {
                    userEmail: {
                        msg: 'las credenciales son invalidas'
                    }
                }
            })
        }
        return res.render ('login', {
            errors: {
                userEmail: {
                    msg: 'el email no se encuentra en nuestra base de datos'
                }
            }
        })
        }
    },
    logout: (req, res)=>{
        res.clearCookie('cookieEmailUser')
        req.session.destroy();
        return res.redirect('/');
    },
    listAll: (req, res) =>{
        res.render('users', {users} );     
    },
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
        let userInDb =  User.findByField('userEmail', req.body.userEmail);
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
        let userToCreate = {
            ...req.body,
            userPass:  bcrypt.hashSync(req.body.userPass, 10),
            userImage: req.file.filename
        }
        let userCreated = User.create(userToCreate)   

        return res.redirect('../users/login')     

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
        console.log(id)
        let profile = users.find((item) => item.userID == id);
        res.render('profile', {profile})
    },
    userLogged: (req, res)=>{
        return res.render('userLogged', {
            user: req.session.userLogged
        })
    },
    delete: (req, res)=>{
        let id = req.params.id;
        console.log(id)
        users = users.filter((item)=> item.userID != id);
        fs.writeFileSync(
            path.join(__dirname, '../data/users.json'),
            JSON.stringify(users, null, 4),
                {
                    encoding: 'utf-8',
                }
            );
            res.render('users', {users})
    },
    edit: (req, res)=>{
        let id= req.params.id;
        let userInfo = users.find((item) => item.userID == id);
        res.render('userEdit', {userInfo})
    },
    processEdit: (req, res)=>{
        let id = req.params.id;
        let file = req.file;
        const {userName, userLastN, userEmail, userPass, userCategory, userImage} = req.body;
        users.forEach(item =>  {
            if(item.userID == id){
                item.userName = userName;
                item.userLastN = userLastN;
                item.userEmail = userEmail;
                item.userPass = userPass;
                item.userCategory = userCategory;
                item.userImage = `${file.filename}`;
            };
            fs.writeFileSync(
                path.join(__dirname, '../data/users.json'),
                JSON.stringify(users, null, 4),
                    {
                        encoding: 'utf-8',
                    }
                );
                res.render('users', {users})    

        })
    }
}

module.exports= controller;