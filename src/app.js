const express = require("express");
const path =  require ("path");
const mainRoute = require('./routes/mainRoute');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const methodOverride = require('method-override');


const app = express ();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT)
})

app.use(express.static(path.join(__dirname, '../public')));

// Setup del req.body
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// ruta home
app.use(mainRoute);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);