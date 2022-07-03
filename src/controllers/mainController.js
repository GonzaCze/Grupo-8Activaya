const path = require ("path")
const fs = require ("fs")

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
      
module.exports =  controller;


