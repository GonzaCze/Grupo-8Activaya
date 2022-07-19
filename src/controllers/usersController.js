const fs = require('fs');
const path = require('path');
let users = require('../data/users.json');

const controller = {
    login: (req, res)=>{
        res.render('login',)
    },
    processLogin: (req, res)=>{
        res.send('proceso de login')
    },
    listAll: (req, res) =>{
        res.render('users', {users} );     
    },
    register: (req, res) => {
       //res.send('Estoy en FORMULARIO para crear usuario');
       res.render('register')
    },
    processRegister: (req, res) => {
        console.log(req.body)
        const newID = users[(users.length - 1)].userID + 1;
        let file = req.file;
        let newUser = {
            userID: newID,
            userName: req.body.userName,
            userLastN: req.body.userLastN,
            userPass: req.body.userPass,
            userCategory: req.body.userCategory,
            userImage: `${file.filename}`,
        }
        users.push(newUser);
        fs.writeFileSync(
            path.join(__dirname, '../data/users.json'),
            JSON.stringify(users, null, 4),
                {
                    encoding: 'utf-8',
                }
            );
            console.log('FILE SAVED');
            res.render('users', {users});         
    },
    profile: (req, res) =>{
        let id= req.params.id;
        console.log(id)
        let profile = users.find((item) => item.userID == id);
        res.render('profile', {profile})
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