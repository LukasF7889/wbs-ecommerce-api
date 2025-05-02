import "./db/associations.js";
import express from "express";
import categoryRouter from "./routers/categoryRouter.js";
import orderRouter from "./routers/orderRouter.js";
import ErrorResponse from "./utils/ErrorResponse.js";

const app = express();
const port = process.env.PORT || 8080;

const errorHandler = (err, req, res, next) => {
  process.env.NODE_ENV !== "production" && console.log(err);
  res.status(err.statusCode || 500).json({ error: err.message });
};

app.use(express.json());
app.use("/categories", categoryRouter);

app.use((req, res) => {
  throw new ErrorResponse("Invalid route", 404);
});

app.use(errorHandler);

app.listen(port, () => console.log(`e-commerce server running at ${port}`));
