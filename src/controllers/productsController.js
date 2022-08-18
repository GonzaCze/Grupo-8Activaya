const fs = require('fs');
const path = require('path');
let products = require ("../data/products.json");
const modelProducto = require ("../../database/models/Product")
const category = require ("../../database/models/category")
const asociation = require ("../../database/models/asociations")
const { Op } = require("sequelize")

const controller = {
    create: (req, res) => {
        category.findAll()
        .then()
    .then((category) => {
       res.render("create",{category})
    })
    },
    products:(req,res) => {
        const productos = modelProducto.findAll()
        const categorias = category.findAll()
        Promise
        .all([productos, categorias])
        .then(([products,category]) => {
            res.render("products", {products,category})
        }
    )},
    filter: (req,res) => {
        const productos = modelProducto.findAll({
            include: "Category",
            where: {
            CategoryId: req.body.pdtCategory
        } 
        })
        const categorias = category.findAll()
        Promise
        .all([productos, categorias])
        .then(([products,category]) => {
            res.render("products", {products,category})
        })
    },
        search: (req,res) => {
            const search = `%${req.query.search}%`
          const productos =  modelProducto.findAll({
                where: {
                pdtName: {[Op.like]:search}
        }})
        const categorias = category.findAll()
        Promise
        .all([productos, categorias])
        .then(([products,category]) => {
            res.render("products", {products,category})
        })
    },
    detail: (req,res) => {
        modelProducto.findByPk(req.params.id)
        .then((products) => {
            res.render("detail",{products})
        })
    },
    edicionFormulario: (req,res) => {
        modelProducto.findByPk(req.params.id)
        .then((products) => {
            res.render("edit",{products})
        })
    },
    editado:(req,res) => {
        console.log(req.body)
        modelProducto.update({
            pdtName: req.body.pdtName,
            pdtDescription: req.body.pdtDescription,
            pdtCategory: req.body.pdtCategory,
            pdtCapacity: req.body.pdtCapacity,
            pdtPrice: req.body.pdtPrice,
        },
        {
            where: {
                pdtID: req.params.id
            }
        }).then(() => {
            modelProducto.findAll()
        .then((products) => {
            res.render("products", {products:products})
        })
    })},
    add: (req, res) => {
        let file = req.file
        modelProducto.create({
            pdtName: req.body.pdtName,
            pdtDescription: req.body.pdtDescription,
            category_id: req.body.pdtCategory,
            CategoryId: req.body.pdtCategory,
            pdtCapacity: req.body.pdtCapacity,
            pdtPrice: req.body.pdtPrice,
            pdtImage: `${file.filename}`

        }).then(() => {
            modelProducto.findAll()
        .then((products) => {
            res.redirect("/products")
        })
    })
                 
        },
    shoppingCart: (req, res)=>{
        res.render('shoppingCart', {products})
    },
    delete: (req,res) => {
        modelProducto.destroy({
            where: {
                pdtID: req.params.id
            }
        })
    .then(() => {
        modelProducto.findAll()
    .then((products) => {
        res.render("products", {products:products})
    })
})}
}

module.exports= controller;