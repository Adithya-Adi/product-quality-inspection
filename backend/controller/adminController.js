import {
  registerUser,
  login,
} from "../service/adminService.js";

export const registerUserController = async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.status(result.status).send(result);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while registering an admin" });
  }
}
export const loginController = async (req, res) => {
  try {
    const result = await login(req.body.email, req.body.password);
    res.status(result.status).send(result);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while login" });
  }
}