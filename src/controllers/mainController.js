const path = require ("path")

const controller = {
    index: (req, res)=>{
        res.render('index', {product: product} )
    },
    login: (req, res)=>{
        res.render('login',)
    },
    register: (req, res)=>{
        res.render('register',)
    },
    create: (req, res)=>{
        res.render('create',)
    },
    shoppingCart: (req, res)=>{
        res.render('shoppingCart',)
    },
    products: (req, res)=>{
        res.render('products',)
    },
}

const product = {
    name :"coca"
}

module.exports =  controller ;