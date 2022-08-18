const express = require("express");
const session = require('express-session');
const cookies = require('cookie-parser')

//Base de datos
const sequelize = require ("../database/models/db")
const User = require ("../database/models/User")

const app = express ();
const path =  require ("path");
const methodOverride = require ("method-override");
const userLoggedMiddle = require('./middlewares/userLoggedMiddle');


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '../public')));


//Middlewares
//Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(methodOverride ("_method"));
app.use(session({
    secret: 'SHhh secreto!!',
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddle);



// Routes
app.use('/', require('./routes/mainRoute'));
app.use('/products', require('./routes/productsRoutes'));
app.use('/users', require('./routes/usersRoutes'));


//Levantando el Servidor
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT)

// Conectarse a la base de Datos cuando se levanta el servidor
sequelize.sync({force:false}).then(() => {
    console.log("Se levanto la base de datos")
}).catch((error) => {console.log(`Se encontro un error`, error)})

})


