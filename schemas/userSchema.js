import JOI from "joi";

const userSchema = JOI.object({
  name: JOI.string().min(3).max(30).required(),
  email: JOI.string().email().required(),
  password: JOI.string().min(6).max(30).required(),
});

export default userSchema;
