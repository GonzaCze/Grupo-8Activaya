const {Model , DataTypes} = require ("sequelize");
const sequelize = require ("./db")


const User = sequelize.define("users", {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    userName: DataTypes.STRING,
    userLastN: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    userPass: DataTypes.STRING,
    userCategory: DataTypes.STRING,
    userImage: DataTypes.STRING,
},
{
    sequelize,
    timestamps:false
})

module.exports = User;