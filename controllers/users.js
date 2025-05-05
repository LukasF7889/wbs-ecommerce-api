import User from "../models/User.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const users = await User.findAll();

    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) throw new ErrorResponse("User not found", 404);

    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) throw new ErrorResponse("User not found", 404);
    await user.update(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) throw new ErrorResponse("User not found", 404);
    await user.destroy();
    res.status(201).json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
};
