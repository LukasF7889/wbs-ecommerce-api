import sequelize from "./index.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";

Category.hasMany(Product, {
  foreignKey: "categoryId",
  as: "products",
  onDelete: "CASCADE", //deletes products when category is deleted
});

sequelize.sync();
