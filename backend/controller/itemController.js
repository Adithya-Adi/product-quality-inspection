import {
  addItem,
  getAllItems,
  updateItem,
  deleteItem,
  getItemById,
  assignTemplate,
  getItemStats,
} from "../service/itemService.js";

export const addItemController = async (req, res) => {
  try {
    const response = await addItem(req.body);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while adding item", error: err });
  }
}

export const getAllItemsController = async (req, res) => {
  try {
    const response = await getAllItems();
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while getting items", error: err });
  }
}

export const updateItemController = async (req, res) => {
  const itemId = req.params.itemId;
  const updatedData = req.body;
  try {
    const response = await updateItem(itemId, updatedData);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while updating item", error: err });
  }
}

export const deleteItemController = async (req, res) => {
  const itemId = req.params.itemId;
  try {
    const response = await deleteItem(itemId);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while deleting item", error: err });
  }
}

export const getItemByIdController = async (req, res) => {
  const itemId = req.params.itemId;
  try {
    const response = await getItemById(itemId);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while getting item by ID", error: err });
  }
}

export const assignTemplateController = async (req, res) => {
  const itemId = req.params.itemId;
  const templateId = req.params.templateId;
  try {
    const response = await assignTemplate(itemId, templateId);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while assigning template to item", error: err });
  }
}

export const getItemStatsController = async (req, res) => {
  try {
    const response = await getItemStats();
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while getting item stats", error: err });
  }
}