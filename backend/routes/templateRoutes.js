import express from "express";
import {
  addTemplateController,
  updateTemplateController,
  getAllTemplatesController,
  deleteTemplateController,
  addQcFieldToTemplateController,
  deleteQcFieldController,
  getAllQcFieldsController,
} from "../controller/templateController.js";

const router = express.Router();

router.post("/add", addTemplateController);
router.patch("/update/:id", updateTemplateController);
router.get("/getAll", getAllTemplatesController);
router.delete("/delete/:id", deleteTemplateController);
router.post("/qcField/add/:id", addQcFieldToTemplateController);
router.delete("/qcField/delete/:templateId/:qcFieldId", deleteQcFieldController);
router.get("/qcField/getAll/:id", getAllQcFieldsController);

export default router;
