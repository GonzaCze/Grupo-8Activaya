const {Model , DataTypes} = require ("sequelize");
const sequelize = require ("./db")


const Shopping = sequelize.define("shopping", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    Products_pdtID: {
        type: DataTypes.INTEGER,
    },
    Shopping_cart_id:{
        type: DataTypes.INTEGER
    },
},
{
    sequelize,
    timestamps:false
})

module.exports = User;