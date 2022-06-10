const express = require("express");
const app = express ();
const path =  require ("path");
const mainRoute = require('./routes/mainRoute');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT)
})

app.use(express.static(path.join(__dirname, '../public')))

app.use(mainRoute);
// const publicPath = path.resolve(__dirname, './public');
// app.use (express.static(publicPath))
// app.listen(3000, ()=> {
//     console.log("Servidor corriendo en el puerto 3000")
// })

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './views/index.html'))
// })
// app.get('/login', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './views/login.html'))
// })
// app.get('/registro', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './views/registro.html'))
// })
// app.get('/detalle', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './views/detalle.html'))
// })
// app.get('/carrito', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './views/carrito.html'))
// })
