import TemplateModal from "../modal/Template.js";

export const addTemplate = async (templateData) => {
  try {
    const newTemplate = new TemplateModal(templateData);
    await newTemplate.save();
    return {
      status: 200,
      message: "Template created",
      data: newTemplate,
    }
  } catch (error) {
    console.error("Error adding template:", error);
    throw error;
  }
}

export const updateTemplate = async (templateId, updatedData) => {
  try {
    const updatedTemplate = await TemplateModal.findByIdAndUpdate(
      templateId,
      updatedData,
      { new: true }
    );

    if (!updatedTemplate) {
      return {
        status: 404,
        message: "Template not found",
      };
    }

    return {
      status: 200,
      message: "Template updated",
      data: updatedTemplate,
    };
  } catch (error) {
    console.error("Error updating template:", error);
    throw error;
  }
};

export const getAllTemplates = async () => {
  try {
    const templates = await TemplateModal.find();
    return {
      status: 200,
      message: "Templates retrieved",
      data: templates,
    };
  } catch (error) {
    console.error("Error getting templates:", error);
    throw error;
  }
};

export const deleteTemplate = async (templateId) => {
  try {
    const deletedTemplate = await TemplateModal.findByIdAndDelete(templateId);

    if (!deletedTemplate) {
      return {
        status: 404,
        message: "Template not found",
      };
    }

    return {
      status: 200,
      message: "Template deleted",
      data: deletedTemplate,
    };
  } catch (error) {
    console.error("Error deleting template:", error);
    throw error;
  }
};

export const addQcFieldToTemplate = async (templateId, qcFieldData) => {
  try {
    const template = await TemplateModal.findById(templateId);

    if (!template) {
      return {
        status: 404,
        message: "Template not found",
      };
    }
    template.qcField.push(qcFieldData);
    await template.save();
    return {
      status: 200,
      message: "QC field added to the template",
      data: template,
    };
  } catch (error) {
    console.error("Error adding QC field to template:", error);
    throw error;
  }
};

export const getAllQcFields = async (templateId) => {
  try {
    const template = await TemplateModal.findById(templateId);

    if (!template) {
      return {
        status: 404,
        message: "Template not found",
      };
    }
    const qcFields = template.qcField;
    return {
      status: 200,
      message: "QC fields retrieved",
      data: qcFields,
    };
  } catch (error) {
    console.error("Error getting QC fields:", error);
    throw error;
  }
};

export const deleteQcField = async (templateId, qcFieldId) => {
  try {
    const template = await TemplateModal.findById(templateId);

    if (!template) {
      return {
        status: 404,
        message: "Template not found",
      };
    }
    const qcFieldIndex = template.qcField.findIndex(field => field._id.toString() === qcFieldId);
    if (qcFieldIndex === -1) {
      return {
        status: 404,
        message: "QC field not found",
      };
    }
    template.qcField.splice(qcFieldIndex, 1);
    await template.save();
    return {
      status: 200,
      message: "QC field deleted",
      data: template,
    };
  } catch (error) {
    console.error("Error deleting QC field:", error);
    throw error;
  }
};