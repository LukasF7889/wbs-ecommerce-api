import { Router } from "express";
import {
  getOrderById,
  getOrders,
  postOrders,
  putOrder,
  deleteOrder,
} from "../controllers/orders";
import validateSchema from "../middleware/validateSchema";

const orderRouter = Router();

userRouter.route("/").get(getOrders).post(validateSchema(postOrders));

userRouter
  .rout("/:id")
  .get(getOrderById)
  .put(validateSchema(putOrder))
  .delete(deleteOrder);
export default orderRouter;
