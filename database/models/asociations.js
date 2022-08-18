const Product = require ("./Product")
const Category = require("./category")

Product.belongsTo(Category)

Category.hasMany(Product)

