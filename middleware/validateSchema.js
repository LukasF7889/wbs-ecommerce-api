import ErrorResponse from "../utils/ErrorResponse.js";

const validateSchema = (schema) => async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) throw new ErrorResponse("Invalid body", 400);
  next();
};

export default validateSchema;
