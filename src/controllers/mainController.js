const path = require ("path")

let products = require ("../data/products.json")


const controller = {
    index: (req, res)=>{
        res.render('index',  )
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
        res.render('products', {products})
    },
    users: (req, res)=>{
        res.render('users',)
    },
    detail: (req,res) => {
        const id = req.params.id
        res.render("detail", {products, id})
    },
    edit: (req, res) =>{
        const id = req.params.id
        if(products.find(item => item.id == id)){
            const productDetail = products.find((item)=> item.id == id);
            res.render('edit', {productDetail, products});
        }else{
            res.send('no hubo coincidencia')
        }
    }
}


module.exports =  controller ;