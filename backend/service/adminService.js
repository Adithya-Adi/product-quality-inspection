import Admin from "../modal/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (userData) => {
  try {
    const existingUser = await Admin.findOne({ email: userData.email });
    if (existingUser) {
      return {
        status: 409,
        message: "User already exists",
      };
    }
    const hashedPassword = bcrypt.hashSync(userData.password, 5);
    const newUser = new Admin({
      ...userData,
      password: hashedPassword,
    });
    await newUser.save();
    return {
      status: 200,
      message: "User registered",
      data: newUser,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err.message || "Internal server error",
    };
  }
};

export const login = async (email, password) => {
  try {
    const existingUser = await Admin.findOne({ email: email });
    if (!existingUser) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const isPasswordValid = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordValid) {
      return {
        status: 401,
        message: "Invalid password",
      };
    }
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_KEY);
    existingUser.password = undefined;
    return {
      status: 200,
      message: "Successfully signed in",
      data: existingUser,
      token: token,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err.message || "Internal server error",
    };
  }
};