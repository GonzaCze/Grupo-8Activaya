const express = require("express");
const session = require('express-session');
const cookies = require('cookie-parser')

const app = express ();
const path =  require ("path");
const methodOverride = require ("method-override");
const userLoggedMiddle = require('./middlewares/userLoggedMiddle');


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '../public')));


//Middlewares
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


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT)
})


