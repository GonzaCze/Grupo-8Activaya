const path =  require ("path");

const controller = {
    index:  (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../views/index.html'))
    },
    login: (req, res)=>{
        res.sendFile(path.resolve(__dirname, './views/login.html'))
    },
    registro:  (req, res)=>{
        res.sendFile(path.resolve(__dirname, './views/registro.html'))
    },
    detalle: (req, res)=>{
        res.sendFile(path.resolve(__dirname, './views/detalle.html'))
    },
    carrito: (req, res)=>{
        res.sendFile(path.resolve(__dirname, './views/carrito.html'))
    }
}

module.exports = controller; 