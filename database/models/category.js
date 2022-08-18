const {Model , DataTypes} = require ("sequelize");
const sequelize = require ("./db")


const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true, 
        allowNull : false
    },
    name: DataTypes.STRING,
},
{
    sequelize,
    timestamps:false
})

    // Category.associate = function(models){
    //     Category.hasMany(models.products, {
    //         as : 'products',
    //         foreignKey : 'category_id'
    //     })
    // }

module.exports = Category;