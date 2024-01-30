import express from "express";
import {
  addItemController,
  getAllItemsController,
  updateItemController,
  deleteItemController,
  getItemByIdController,
  assignTemplateController,
  getItemStatsController,
} from "../controller/itemController.js";

const router = express.Router();

router.post("/add", addItemController);
router.get("/getAll", getAllItemsController);
router.patch("/update/:itemId", updateItemController);
router.delete("/delete/:itemId", deleteItemController);
router.get("/getById/:itemId", getItemByIdController);
router.patch("/assignTemplate/:itemId/:templateId", assignTemplateController);
router.get("/getItemStats", getItemStatsController);

export default router;
