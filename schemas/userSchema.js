import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(1).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(30).required(),
}).required();

export default userSchema;
