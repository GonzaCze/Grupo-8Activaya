const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const modelUser = require("../../database/models/User");
const controller = {
    listAll: (req, res) =>{
        modelUser.findAll()
        .then((resUsers) => {
        const Api = {
            count : resUsers.length,
            users: resUsers.map(element => ({id:element.userID, name:element.userName, email:element.userEmail, imagen: `http://localhost:5000/uploads/users/${element.userImage}`}))
            }
        res.json(Api);
    })},
    edit: (req, res)=>{
        let id= req.params.id;
        modelUser.findByPk(id).then((resUser) => {
            const {userCategory ,userPass,...userInfo} = resUser.dataValues
          res.json(userInfo);
        });
}
}
module.exports= controller