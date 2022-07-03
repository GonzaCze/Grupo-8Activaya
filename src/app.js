const express = require("express");
const app = express ();
const path =  require ("path");
const mainRoute = require('./routes/mainRoute');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const methodOverride = require ("method-override")

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride ("_method"))





// ruta home
app.use(mainRoute);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

app.use(express.static(path.join(__dirname, '../public')));

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT)
})


// Setup del req.body

