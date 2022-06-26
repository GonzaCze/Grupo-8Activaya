module.exports = {
    index: (req, res)=>{
        res.render('index', )
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




// const path =  require ("path");
// const controller = {
//     index:  (req, res)=>{
//         res.sendFile(path.resolve(__dirname, '../views/index.html'))
//     },
//     login: (req, res)=>{
//         res.sendFile(path.resolve(__dirname, './views/login.html'))
//     },
//     registro:  (req, res)=>{
//         res.sendFile(path.resolve(__dirname, './views/registro.html'))
//     },
//     detalle: (req, res)=>{
//         res.sendFile(path.resolve(__dirname, './views/detalle.html'))
//     },
//     carrito: (req, res)=>{
//         res.sendFile(path.resolve(__dirname, './views/carrito.html'))
//     }
// }
// module.exports = controller; 