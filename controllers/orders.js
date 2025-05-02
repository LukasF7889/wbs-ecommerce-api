import Order from "../models/Order.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const getOrders = async (req, res) => {
  console.log("Get orders");
};

const postOrders = async (req, res) => {
  console.log("Post orders");
};

const getOrderById = async (req, res) => {
  console.log("Get order by id");
};

const putOrder = async (req, res) => {
  console.log("Update orders");
};

const deleteOrder = async (req, res) => {
  console.log("Delete order");
};

export { getOrderById, getOrders, postOrders, putOrder, deleteOrder };
