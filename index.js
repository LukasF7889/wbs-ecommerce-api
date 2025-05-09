import "./db/associations.js";
import express from "express";
import categoryRouter from "./routers/categoryRouter.js";
import orderRouter from "./routers/orderRouter.js";
import productRouter from "./routers/productRouter.js";
import ErrorResponse from "./utils/ErrorResponse.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const port = process.env.PORT || 8080;

const errorHandler = (err, req, res, next) => {
  process.env.NODE_ENV !== "production" && console.log(err);
  res.status(err.statusCode || 500).json({ error: err.message });
};

app.use(express.json());
app.use("/categories", categoryRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.use((req, res) => {
  throw new ErrorResponse("Invalid route", 404);
});

app.use(errorHandler);

app.listen(port, () => console.log(`e-commerce server running at ${port}`));
