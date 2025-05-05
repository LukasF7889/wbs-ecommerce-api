import { Router } from "express";
import {
  getOrderById,
  getOrders,
  postOrders,
  putOrder,
  deleteOrder,
} from "../controllers/orders.js";
import validateSchema from "../middleware/validateSchema.js";

const orderRouter = Router();

orderRouter.route("/").get(getOrders).post(validateSchema(postOrders));

orderRouter
  .route("/:id")
  .get(getOrderById)
  .put(validateSchema(putOrder))
  .delete(deleteOrder);
export default orderRouter;
