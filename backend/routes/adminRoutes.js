import express from "express";
import {
  registerUserController,
  loginController,
} from "../controller/adminController.js";
const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginController);

export default router;