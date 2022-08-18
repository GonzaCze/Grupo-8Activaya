const {Model, DataTypes} = require ("sequelize")
const sequelize = require ("./db")


const Product = sequelize.define("products",{
    pdtID: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    pdtName:{
        type: DataTypes.STRING,
    },
    pdtDescription:{
        type: DataTypes.STRING,
    },
    pdtCapacity:
    {
        type: DataTypes.INTEGER
    },
    pdtPrice:
    {
        type: DataTypes.DECIMAL
    },
    pdtImage:{
        type:DataTypes.BLOB
    },
    brands_id: {
        type:DataTypes.INTEGER
    },
    category_id: {
        type:DataTypes.INTEGER
    },
    CategoryId: {
        type:DataTypes.INTEGER
    }
},
{
    sequelize,
    timestamps: false
},)

// Product.associate = function(models){
//     Product.belongsTo(models.Category, {
//         as : 'category',
//         foreignKey : 'category_id'
//     })
// }

module.exports = Product;
