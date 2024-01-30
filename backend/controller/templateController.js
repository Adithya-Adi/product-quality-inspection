import {
  addTemplate,
  updateTemplate,
  getAllTemplates,
  deleteTemplate,
  addQcFieldToTemplate,
  getAllQcFields,
  deleteQcField,
} from "../service/templateService.js";

export const addTemplateController = async (req, res) => {
  try {
    const response = await addTemplate(req.body);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while adding template", error: err });
  }
}

export const updateTemplateController = async (req, res) => {
  try {
    const templateId = req.params.id;
    const response = await updateTemplate(templateId, req.body);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while updating template", error: err });
  }
};

export const getAllTemplatesController = async (req, res) => {
  try {
    const response = await getAllTemplates();
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while fetching templates", error: err });
  }
};

export const deleteTemplateController = async (req, res) => {
  try {
    const templateId = req.params.id;
    const response = await deleteTemplate(templateId);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while deleting template", error: err });
  }
};

export const addQcFieldToTemplateController = async (req, res) => {
  try {
    const templateId = req.params.id;
    const response = await addQcFieldToTemplate(templateId, req.body);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while adding qc field", error: err });
  }
};


export const getAllQcFieldsController = async (req, res) => {
  try {
    const templateId = req.params.id;
    const response = await getAllQcFields(templateId);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while getting qc field", error: err });
  }
};


export const deleteQcFieldController = async (req, res) => {
  try {
    const templateId = req.params.templateId;
    const qcFieldId = req.params.qcFieldId;
    const response = await deleteQcField(templateId, qcFieldId);
    res.status(response.status).send(response);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while deleting qc field", error: err });
  }
};