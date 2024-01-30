import ItemModal from "../modal/Item.js";
import TemplateModal from "../modal/Template.js";

export const addItem = async (itemData) => {
  try {
    const newItem = new ItemModal(itemData);
    await newItem.save();
    return {
      status: 200,
      message: "Item created",
      data: newItem,
    }
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}

export const getAllItems = async () => {
  try {
    const items = await ItemModal.find();
    return {
      status: 200,
      message: "Items retrieved",
      data: items,
    };
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
}

export const updateItem = async (itemId, updatedData) => {
  try {
    const updatedItem = await ItemModal.findByIdAndUpdate(itemId, updatedData, { new: true });
    if (updatedItem.template) {
      const template = await TemplateModal.findById(updatedItem.template);
      if (updatedItem.qcReading && template.qcField) {
        const mismatchedLabels = [];

        updatedItem.qcReading.forEach((reading, index) => {
          const qcField = template.qcField[index];
          if (reading < qcField.minimumTolerance || reading > qcField.maximumTolerance) {
            mismatchedLabels.push(qcField.displayLabel);
          }
        });
        if (mismatchedLabels.length > 0) {
          const mismatchedLabelString = mismatchedLabels.join(",");
          const message =
            mismatchedLabels.length === 1 ?
              `${mismatchedLabelString} value is not in range` :
              `${mismatchedLabelString} values not in range`;
          console.log(message);

          const rejectItem = await ItemModal.findByIdAndUpdate(itemId,
            { qcStatus: "Rejected", rejectComment: message },
            { new: true }
          );
          return {
            status: 200,
            message: "Item updated",
            data: rejectItem,
          };

        } else {
          const approveItem = await ItemModal.findByIdAndUpdate(itemId,
            { qcStatus: "Approved", rejectComment: "" },
            { new: true }
          );
          return {
            status: 200,
            message: "Item updated",
            data: approveItem,
          };
        }
      }
    }
    return {
      status: 200,
      message: "Item updated",
      data: updatedItem,
    };
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
}

export const deleteItem = async (itemId) => {
  try {
    const deletedItem = await ItemModal.findByIdAndDelete(itemId);
    return {
      status: 200,
      message: "Item deleted",
      data: deletedItem,
    };
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}

export const getItemById = async (itemId) => {
  try {
    const item = await ItemModal.findById(itemId);
    if (!item) {
      return {
        status: 404,
        message: "Item not found",
        data: null,
      };
    }
    return {
      status: 200,
      message: "Item retrieved",
      data: item,
    };
  } catch (error) {
    console.error("Error getting item by ID:", error);
    throw error;
  }
}

export const assignTemplate = async (itemId, templateId) => {
  try {
    const template = await TemplateModal.findById(templateId);
    if (!template) {
      return {
        status: 404,
        message: "Template Not Found",
      }
    }
    const updatedItem = await ItemModal.findByIdAndUpdate(itemId, { template: templateId, qcReading: [], qcStatus: "", rejectComment: "" }, { new: true });

    return {
      status: 200,
      message: "Item updated",
      data: updatedItem,
    };
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
}

export const getItemStats = async () => {
  try {
    const approvedItems = await ItemModal.countDocuments({ qcStatus: "Approved" });
    const rejectedItems = await ItemModal.countDocuments({ qcStatus: "Rejected" });
    const totalItems = approvedItems + rejectedItems;
    const efficiency = totalItems === 0 ? 0 : (approvedItems / totalItems) * 100;

    return {
      status: 200,
      message: "Item stats retrieved",
      data: {
        totalItems,
        approvedItems,
        rejectedItems,
        efficiency,
      },
    };
  } catch (error) {
    console.error("Error getting item stats:", error);
    throw error;
  }
}
