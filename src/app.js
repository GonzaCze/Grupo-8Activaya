const express = require("express");
const app = express ();
const path =  require ("path");
const methodOverride = require ("method-override");
const session = require('express-session');


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '../public')));


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride ("_method"));
app.use(session({secret:'secreto!!'}));


// Routes
app.use('/', require('./routes/mainRoute'));
app.use('/products', require('./routes/productsRoutes'));
app.use('/users', require('./routes/usersRoutes'));


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT)
})


