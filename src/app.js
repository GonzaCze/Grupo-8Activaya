const express = require("express");
const app = express ();
const path =  require ("path");
const mainRoute = require('./routes/mainRoute');


const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended:false}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(mainRoute);

app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT)
})