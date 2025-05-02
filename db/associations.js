import sequelize from "./index.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import User from "../models/User.js";

Category.hasMany(Product, {
  foreignKey: "categoryId",
  as: "products",
  onDelete: "CASCADE", //deletes products when category is deleted
});

Order.belongsTo(User, {
  foreignKey: "userId",
});

User.belongsToMany(Product, {
  through: "OrderProducts",
});

Product.belongsToMany(Order, {
  through: "OrderProducts",
});

sequelize.sync();
