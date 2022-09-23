const fs = require('fs');
const path = require('path');
let products = require ("../data/products.json");
const modelProducto = require ("../../database/models/Product")
const category = require ("../../database/models/category")
const asociation = require ("../../database/models/asociations")
const { Op } = require("sequelize")

const controller = {
    products:(req,res) => {
        const productos = modelProducto.findAll()
        const categorias = category.findAll()
        Promise
        .all([productos, categorias])
        .then(([resUsers, category]) => {

            const totalCategory = resUsers.reduce((prev,curr)=> {
                prev[curr["CategoryId"]] = (prev[curr["CategoryId"]] || 0) + 1
                return prev
            }, {} )

            const obj = {}
            category.map((element, index) => {
                console.log(element.dataValues.name)
                for (key in totalCategory ) {
                    if(key == element.dataValues.id){
                        obj[element.dataValues["name"]] = totalCategory[key]
                    }
                }return obj})

            const Api = {
                count: category.length,
                countByCategory: obj,
                products: resUsers.map(element => ({id:element.pdtID, name:element.pdtName, email:element.pdtDescription, capacity:element.pdtCapacity, price: element.pdtPrice, imagen: element.pdtImage }))
                }            
            res.json(Api);
            })},
    detail: (req,res) => {
        modelProducto.findByPk(req.params.id)
        .then((products) => {
            const {CategoryId, brands_id, ...apiProductsId} = products.dataValues
            res.json(apiProductsId)
        })
    }
}

module.exports= controller;