const {Model , DataTypes} = require ("sequelize");
const sequelize = require ("./db")


const Brands = sequelize.define("brands", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    name: DataTypes.STRING,
},
{
    sequelize,
    timestamps:false
})

module.exports = Brands;