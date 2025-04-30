import ErrorResponse from "../utils/ErrorResponse";

const validateSchema = (schema) => async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) throw new ErrorResponse(err.message, 400);

  next();
};

export default validateSchema;
