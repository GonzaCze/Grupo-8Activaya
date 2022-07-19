const fs = require('fs');
const path = require('path');
let products = require ("../data/products.json");

const controller = {
    listAll: (req, res) =>{
        res.render('products',{products});
    },
    detail: (req,res) => {
        const id = req.params.id
        res.render("detail", {products, id})
    },
    create: (req, res) => {
       //res.send('Estoy en FORMULARIO para crear producto');
       res.render('create')
    },
    edit: (req, res) =>{
        const id = req.params.id
        if(products.find(item => item.id == id)){
            const productDetail = products.find((item)=> item.id == id);
            res.render('edit', {productDetail, products});
        }else{
            res.send('no hubo coincidencia')
        }
    },
    add: (req, res) => {
            const newID = products[(products.length - 1)].pdtID + 1;
            let file = req.file;
            let newPdt = {
                pdtID: newID,
                pdtName: req.body.pdtName,
                pdtDescription: req.body.pdtDescription,
                pdtCategory: req.body.pdtCategory,
                pdtCapacity: req.body.pdtCapacity,
                pdtPrice: req.body.pdtPrice,
                pdtImage: `${file.filename}`,
            }
            products.push(newPdt);
            fs.writeFileSync(
                path.join(__dirname, '../data/products.json'),
                JSON.stringify(products, null, 4),
                    {
                        encoding: 'utf-8',
                    }
                );
                console.log('FILE SAVED');
                res.render('products', {products});         
        },
    shoppingCart: (req, res)=>{
        res.render('shoppingCart', {products})
    },
    products: (req, res)=>{
         res.render('products', {products})
    },
    update: (req, res) => {
        const productId = req.params.id
        res.send('vamos actualizar del producto' + productId);
    },
    delete: (req,res) => {
        let id = req.params.id
        products = products.filter ((element) => String(element.pdtID) !==id ) 
        
        fs.writeFileSync (
            path.join (__dirname, "../data/products.json"),
            JSON.stringify(products, null, 4),
            {
                encoding: "utf-8",
            }
        );
        res.render ("products", {products})
    },
    buttonEdit: (req,res) => {
        let id = req.params.id
        res.render("edit", {products, id})
    },
    editB: (req,res) => {
        let id = req.params.id

            const {pdtName, pdtCategory, pdtCapacity, pdtPrice, pdtDescription} = req.body;
            
            products.forEach (element => {
                if (String(element.pdtID) == id) 
                {
                    element.pdtName = pdtName;
                    element.pdtDescription = pdtDescription;
                    element.pdtCategory = pdtCategory;
                    element.pdtCapacity = pdtCapacity;
                    element.pdtPrice = pdtPrice;
                }})
    
                fs.writeFileSync (
                    path.join (__dirname, "../data/products.json"),
                    JSON.stringify(products, null, 4),
                    {
                        encoding: "utf-8",
                    }
                );
    res.render ("products", {products})
}
    
}

module.exports= controller;