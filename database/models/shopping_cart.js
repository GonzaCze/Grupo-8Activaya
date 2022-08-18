const {Model , DataTypes} = require ("sequelize");
const sequelize = require ("./db")


const ShoppingCart = sequelize.define("shopping_cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    Usuarios_userID: {
        type: DataTypes.INTEGER
    },
    total: {
        type: DataTypes.DECIMAL(7,2)
    }
},
{
    sequelize,
    timestamps:false
})

module.exports = ShoppingCart;